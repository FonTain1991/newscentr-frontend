/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetRecipeCategoryByUrlQueryVariables = Types.Exact<{
  url: Types.Scalars['String']['input'];
}>;


export type GetRecipeCategoryByUrlQuery = { __typename?: 'Query', getRecipeCategoryByUrl?: { __typename?: 'RecipeCategory', id: string, url: string, name: string, description: string, keywords?: string | null, text?: string | null } | null };


export const GetRecipeCategoryByUrlDocument = gql`
    query getRecipeCategoryByUrl($url: String!) {
  getRecipeCategoryByUrl(url: $url) {
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
 * __useGetRecipeCategoryByUrlQuery__
 *
 * To run a query within a React component, call `useGetRecipeCategoryByUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeCategoryByUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeCategoryByUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useGetRecipeCategoryByUrlQuery(baseOptions: Apollo.QueryHookOptions<GetRecipeCategoryByUrlQuery, GetRecipeCategoryByUrlQueryVariables> & ({ variables: GetRecipeCategoryByUrlQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecipeCategoryByUrlQuery, GetRecipeCategoryByUrlQueryVariables>(GetRecipeCategoryByUrlDocument, options);
      }
export function useGetRecipeCategoryByUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecipeCategoryByUrlQuery, GetRecipeCategoryByUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecipeCategoryByUrlQuery, GetRecipeCategoryByUrlQueryVariables>(GetRecipeCategoryByUrlDocument, options);
        }
export function useGetRecipeCategoryByUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRecipeCategoryByUrlQuery, GetRecipeCategoryByUrlQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecipeCategoryByUrlQuery, GetRecipeCategoryByUrlQueryVariables>(GetRecipeCategoryByUrlDocument, options);
        }
export type GetRecipeCategoryByUrlQueryHookResult = ReturnType<typeof useGetRecipeCategoryByUrlQuery>;
export type GetRecipeCategoryByUrlLazyQueryHookResult = ReturnType<typeof useGetRecipeCategoryByUrlLazyQuery>;
export type GetRecipeCategoryByUrlSuspenseQueryHookResult = ReturnType<typeof useGetRecipeCategoryByUrlSuspenseQuery>;
export type GetRecipeCategoryByUrlQueryResult = Apollo.QueryResult<GetRecipeCategoryByUrlQuery, GetRecipeCategoryByUrlQueryVariables>;