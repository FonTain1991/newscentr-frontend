/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostByPostCategoryUrlQueryVariables = Types.Exact<{
  url: Types.Scalars['String']['input'];
}>;


export type GetPostByPostCategoryUrlQuery = { __typename?: 'Query', getPostByPostCategoryUrl?: Array<{ __typename?: 'Post', id: string, previewId?: string | null, pageName: string, url: string, rubric: { __typename?: 'PostCategory', url: string, name: string } }> | null };


export const GetPostByPostCategoryUrlDocument = gql`
    query getPostByPostCategoryUrl($url: String!) {
  getPostByPostCategoryUrl(url: $url) {
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
 * __useGetPostByPostCategoryUrlQuery__
 *
 * To run a query within a React component, call `useGetPostByPostCategoryUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByPostCategoryUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByPostCategoryUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useGetPostByPostCategoryUrlQuery(baseOptions: Apollo.QueryHookOptions<GetPostByPostCategoryUrlQuery, GetPostByPostCategoryUrlQueryVariables> & ({ variables: GetPostByPostCategoryUrlQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostByPostCategoryUrlQuery, GetPostByPostCategoryUrlQueryVariables>(GetPostByPostCategoryUrlDocument, options);
      }
export function useGetPostByPostCategoryUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByPostCategoryUrlQuery, GetPostByPostCategoryUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostByPostCategoryUrlQuery, GetPostByPostCategoryUrlQueryVariables>(GetPostByPostCategoryUrlDocument, options);
        }
export function useGetPostByPostCategoryUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostByPostCategoryUrlQuery, GetPostByPostCategoryUrlQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostByPostCategoryUrlQuery, GetPostByPostCategoryUrlQueryVariables>(GetPostByPostCategoryUrlDocument, options);
        }
export type GetPostByPostCategoryUrlQueryHookResult = ReturnType<typeof useGetPostByPostCategoryUrlQuery>;
export type GetPostByPostCategoryUrlLazyQueryHookResult = ReturnType<typeof useGetPostByPostCategoryUrlLazyQuery>;
export type GetPostByPostCategoryUrlSuspenseQueryHookResult = ReturnType<typeof useGetPostByPostCategoryUrlSuspenseQuery>;
export type GetPostByPostCategoryUrlQueryResult = Apollo.QueryResult<GetPostByPostCategoryUrlQuery, GetPostByPostCategoryUrlQueryVariables>;