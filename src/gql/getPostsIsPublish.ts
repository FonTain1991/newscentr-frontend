/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostsIsPublishQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPostsIsPublishQuery = { __typename?: 'Query', getPostsIsPublish?: Array<{ __typename?: 'Post', id: string, url: string, rubric: { __typename?: 'PostCategory', url: string } }> | null };


export const GetPostsIsPublishDocument = gql`
    query getPostsIsPublish {
  getPostsIsPublish {
    id
    url
    rubric {
      url
    }
  }
}
    `;

/**
 * __useGetPostsIsPublishQuery__
 *
 * To run a query within a React component, call `useGetPostsIsPublishQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsIsPublishQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsIsPublishQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsIsPublishQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsIsPublishQuery, GetPostsIsPublishQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsIsPublishQuery, GetPostsIsPublishQueryVariables>(GetPostsIsPublishDocument, options);
      }
export function useGetPostsIsPublishLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsIsPublishQuery, GetPostsIsPublishQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsIsPublishQuery, GetPostsIsPublishQueryVariables>(GetPostsIsPublishDocument, options);
        }
export function useGetPostsIsPublishSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostsIsPublishQuery, GetPostsIsPublishQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostsIsPublishQuery, GetPostsIsPublishQueryVariables>(GetPostsIsPublishDocument, options);
        }
export type GetPostsIsPublishQueryHookResult = ReturnType<typeof useGetPostsIsPublishQuery>;
export type GetPostsIsPublishLazyQueryHookResult = ReturnType<typeof useGetPostsIsPublishLazyQuery>;
export type GetPostsIsPublishSuspenseQueryHookResult = ReturnType<typeof useGetPostsIsPublishSuspenseQuery>;
export type GetPostsIsPublishQueryResult = Apollo.QueryResult<GetPostsIsPublishQuery, GetPostsIsPublishQueryVariables>;