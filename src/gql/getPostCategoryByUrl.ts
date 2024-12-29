/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostCategoryByUrlQueryVariables = Types.Exact<{
  url: Types.Scalars['String']['input'];
}>;


export type GetPostCategoryByUrlQuery = { __typename?: 'Query', getPostCategoryByUrl?: { __typename?: 'PostCategory', id: string, url: string, name: string, description: string, keywords?: string | null, text?: string | null } | null };


export const GetPostCategoryByUrlDocument = gql`
    query getPostCategoryByUrl($url: String!) {
  getPostCategoryByUrl(url: $url) {
    id
    url
    name
    description
    keywords
    text
  }
}
    `;

/**
 * __useGetPostCategoryByUrlQuery__
 *
 * To run a query within a React component, call `useGetPostCategoryByUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostCategoryByUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostCategoryByUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useGetPostCategoryByUrlQuery(baseOptions: Apollo.QueryHookOptions<GetPostCategoryByUrlQuery, GetPostCategoryByUrlQueryVariables> & ({ variables: GetPostCategoryByUrlQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostCategoryByUrlQuery, GetPostCategoryByUrlQueryVariables>(GetPostCategoryByUrlDocument, options);
      }
export function useGetPostCategoryByUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostCategoryByUrlQuery, GetPostCategoryByUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostCategoryByUrlQuery, GetPostCategoryByUrlQueryVariables>(GetPostCategoryByUrlDocument, options);
        }
export function useGetPostCategoryByUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostCategoryByUrlQuery, GetPostCategoryByUrlQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostCategoryByUrlQuery, GetPostCategoryByUrlQueryVariables>(GetPostCategoryByUrlDocument, options);
        }
export type GetPostCategoryByUrlQueryHookResult = ReturnType<typeof useGetPostCategoryByUrlQuery>;
export type GetPostCategoryByUrlLazyQueryHookResult = ReturnType<typeof useGetPostCategoryByUrlLazyQuery>;
export type GetPostCategoryByUrlSuspenseQueryHookResult = ReturnType<typeof useGetPostCategoryByUrlSuspenseQuery>;
export type GetPostCategoryByUrlQueryResult = Apollo.QueryResult<GetPostCategoryByUrlQuery, GetPostCategoryByUrlQueryVariables>;