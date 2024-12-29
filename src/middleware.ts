/* eslint-disable no-duplicate-imports */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { MeDocument } from './gql/me'
import { makeClient } from './apollo'

export async function middleware(request: NextRequest) {
  const client = makeClient({ cookie: request.cookies.toString() })
  const { data } = await client.query({
    query: MeDocument,
    fetchPolicy: 'no-cache'
  })
  const user = data?.me
  if (user) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return null
}

export const config = {
  matcher: '/auth/:path*',
}