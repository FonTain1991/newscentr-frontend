/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCountPostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCountPostsQuery = { __typename?: 'Query', getCountPosts?: { __typename?: 'Post', total: number } | null };


export const GetCountPostsDocument = gql`
    query getCountPosts {
  getCountPosts {
    total
  }
}
    `;

/**
 * __useGetCountPostsQuery__
 *
 * To run a query within a React component, call `useGetCountPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetCountPostsQuery, GetCountPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountPostsQuery, GetCountPostsQueryVariables>(GetCountPostsDocument, options);
      }
export function useGetCountPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountPostsQuery, GetCountPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountPostsQuery, GetCountPostsQueryVariables>(GetCountPostsDocument, options);
        }
export function useGetCountPostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCountPostsQuery, GetCountPostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCountPostsQuery, GetCountPostsQueryVariables>(GetCountPostsDocument, options);
        }
export type GetCountPostsQueryHookResult = ReturnType<typeof useGetCountPostsQuery>;
export type GetCountPostsLazyQueryHookResult = ReturnType<typeof useGetCountPostsLazyQuery>;
export type GetCountPostsSuspenseQueryHookResult = ReturnType<typeof useGetCountPostsSuspenseQuery>;
export type GetCountPostsQueryResult = Apollo.QueryResult<GetCountPostsQuery, GetCountPostsQueryVariables>;