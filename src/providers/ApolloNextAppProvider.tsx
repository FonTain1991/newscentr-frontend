'use client'

import { makeClient } from '@/apollo'
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support'

export function ApolloProvider({ children, cookie }: { children: React.ReactNode, cookie?: string }) {
  return (
    <ApolloNextAppProvider
      children={children}
      makeClient={() => {
        return makeClient({ cookie })
      }}
    />
  )
}