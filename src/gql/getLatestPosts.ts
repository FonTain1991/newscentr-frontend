/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetLatestPostsQueryVariables = Types.Exact<{
  cursor?: Types.InputMaybe<Types.Scalars['String']['input']>;
  take?: Types.InputMaybe<Types.Scalars['Float']['input']>;
}>;


export type GetLatestPostsQuery = { __typename?: 'Query', getLatestPosts?: Array<{ __typename?: 'Post', id: string, previewId?: string | null, pageName: string, url: string, rubric: { __typename?: 'PostCategory', url: string, name: string } }> | null };


export const GetLatestPostsDocument = gql`
    query getLatestPosts($cursor: String, $take: Float) {
  getLatestPosts(cursor: $cursor, take: $take) {
    id
    previewId
    rubric {
      url
      name
    }
    pageName
    url
  }
}
    `;

/**
 * __useGetLatestPostsQuery__
 *
 * To run a query within a React component, call `useGetLatestPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestPostsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetLatestPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetLatestPostsQuery, GetLatestPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLatestPostsQuery, GetLatestPostsQueryVariables>(GetLatestPostsDocument, options);
      }
export function useGetLatestPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLatestPostsQuery, GetLatestPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLatestPostsQuery, GetLatestPostsQueryVariables>(GetLatestPostsDocument, options);
        }
export function useGetLatestPostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLatestPostsQuery, GetLatestPostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLatestPostsQuery, GetLatestPostsQueryVariables>(GetLatestPostsDocument, options);
        }
export type GetLatestPostsQueryHookResult = ReturnType<typeof useGetLatestPostsQuery>;
export type GetLatestPostsLazyQueryHookResult = ReturnType<typeof useGetLatestPostsLazyQuery>;
export type GetLatestPostsSuspenseQueryHookResult = ReturnType<typeof useGetLatestPostsSuspenseQuery>;
export type GetLatestPostsQueryResult = Apollo.QueryResult<GetLatestPostsQuery, GetLatestPostsQueryVariables>;