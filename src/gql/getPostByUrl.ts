/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostByUrlQueryVariables = Types.Exact<{
  url: Types.Scalars['String']['input'];
  postCategoryUrl: Types.Scalars['String']['input'];
}>;


export type GetPostByUrlQuery = { __typename?: 'Query', getPostByUrl?: { __typename?: 'Post', id: string, pageName: string, pageTitle: string, url: string, text: string, createdAt?: any | null, updatedAt?: any | null, isPublish: boolean, postCategoryId: string, keywords?: string | null, description: string, previewId?: string | null, previewAlt?: string | null, previewTitle?: string | null, countSee: number, rubric: { __typename?: 'PostCategory', url: string, name: string } } | null };


export const GetPostByUrlDocument = gql`
    query getPostByUrl($url: String!, $postCategoryUrl: String!) {
  getPostByUrl(url: $url, postCategoryUrl: $postCategoryUrl) {
    id
    pageName
    pageTitle
    url
    text
    createdAt
    updatedAt
    isPublish
    postCategoryId
    keywords
    description
    previewId
    previewAlt
    previewTitle
    rubric {
      url
      name
    }
    countSee
  }
}
    `;

/**
 * __useGetPostByUrlQuery__
 *
 * To run a query within a React component, call `useGetPostByUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *      postCategoryUrl: // value for 'postCategoryUrl'
 *   },
 * });
 */
export function useGetPostByUrlQuery(baseOptions: Apollo.QueryHookOptions<GetPostByUrlQuery, GetPostByUrlQueryVariables> & ({ variables: GetPostByUrlQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostByUrlQuery, GetPostByUrlQueryVariables>(GetPostByUrlDocument, options);
      }
export function useGetPostByUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByUrlQuery, GetPostByUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostByUrlQuery, GetPostByUrlQueryVariables>(GetPostByUrlDocument, options);
        }
export function useGetPostByUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostByUrlQuery, GetPostByUrlQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostByUrlQuery, GetPostByUrlQueryVariables>(GetPostByUrlDocument, options);
        }
export type GetPostByUrlQueryHookResult = ReturnType<typeof useGetPostByUrlQuery>;
export type GetPostByUrlLazyQueryHookResult = ReturnType<typeof useGetPostByUrlLazyQuery>;
export type GetPostByUrlSuspenseQueryHookResult = ReturnType<typeof useGetPostByUrlSuspenseQuery>;
export type GetPostByUrlQueryResult = Apollo.QueryResult<GetPostByUrlQuery, GetPostByUrlQueryVariables>;