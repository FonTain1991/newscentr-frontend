import { sha256 } from '@/utils'
import { ApolloLink } from '@apollo/client'
import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'
import {
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support'
import { typePolicies } from './typePolicies'

const isSSR = typeof window === 'undefined'

interface Config {
  cookie?: string | null
}

function createApolloLinks(config: Config) {
  if (isSSR) {
    if (process.env.SERVER_GRAPHQL === undefined) {
      throw new Error('process.env.SERVER_GRAPHQL is undefined')
    }

    const httpLink = new BatchHttpLink({
      batchMax: 20,
      batchInterval: 20,
      batchDebounce: true,
      includeExtensions: true,
      includeUnusedVariables: true,
      uri: process.env.SERVER_GRAPHQL,
      headers: {
        cookie: config.cookie || ''
      }
    })

    const stripDeferLink = new SSRMultipartLink({
      stripDefer: true
    })

    return ApolloLink.from([
      stripDeferLink,
      httpLink
    ])
  }

  if (process.env.NEXT_PUBLIC_GRAPHQL_PATH === undefined) {
    throw new Error('process.env.NEXT_PUBLIC_GRAPHQL_PATH is undefined')
  }

  if (process.env.NEXT_PUBLIC_FORBIDDEN_REDIRECT === undefined) {
    throw new Error('process.env.NEXT_PUBLIC_FORBIDDEN_REDIRECT is undefined')
  }

  const errorLink = new ApolloLink((operation, forward) => {
    return forward(operation).map(data => {
      if (data.errors === undefined) {
        return data
      }

      for (const error of data.errors) {
        if (error.message === 'FORBIDDEN') {
          location.replace(process.env.NEXT_PUBLIC_FORBIDDEN_REDIRECT || '/')
        }
      }

      return data
    })
  })

  const persistedLink = createPersistedQueryLink({ sha256 })

  const httpLink = new BatchHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_PATH,
    batchMax: 20,
    batchInterval: 100,
    batchDebounce: true,
    includeExtensions: true,
    includeUnusedVariables: true,
  })

  return ApolloLink.from([
    errorLink,
    persistedLink,
    httpLink
  ])
}

export function makeClient(config: Config) {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: typePolicies
    }),
    link: createApolloLinks(config)
  })
}

