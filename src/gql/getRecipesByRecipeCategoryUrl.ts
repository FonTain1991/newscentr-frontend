/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetRecipesByRecipeCategoryUrlQueryVariables = Types.Exact<{
  url: Types.Scalars['String']['input'];
}>;


export type GetRecipesByRecipeCategoryUrlQuery = { __typename?: 'Query', getRecipesByRecipeCategoryUrl?: Array<{ __typename?: 'Recipe', id: string, previewId?: string | null, pageName: string, url: string, rubric: { __typename?: 'RecipeCategory', url: string, name: string } }> | null };


export const GetRecipesByRecipeCategoryUrlDocument = gql`
    query getRecipesByRecipeCategoryUrl($url: String!) {
  getRecipesByRecipeCategoryUrl(url: $url) {
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
 * __useGetRecipesByRecipeCategoryUrlQuery__
 *
 * To run a query within a React component, call `useGetRecipesByRecipeCategoryUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipesByRecipeCategoryUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipesByRecipeCategoryUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useGetRecipesByRecipeCategoryUrlQuery(baseOptions: Apollo.QueryHookOptions<GetRecipesByRecipeCategoryUrlQuery, GetRecipesByRecipeCategoryUrlQueryVariables> & ({ variables: GetRecipesByRecipeCategoryUrlQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecipesByRecipeCategoryUrlQuery, GetRecipesByRecipeCategoryUrlQueryVariables>(GetRecipesByRecipeCategoryUrlDocument, options);
      }
export function useGetRecipesByRecipeCategoryUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecipesByRecipeCategoryUrlQuery, GetRecipesByRecipeCategoryUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecipesByRecipeCategoryUrlQuery, GetRecipesByRecipeCategoryUrlQueryVariables>(GetRecipesByRecipeCategoryUrlDocument, options);
        }
export function useGetRecipesByRecipeCategoryUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRecipesByRecipeCategoryUrlQuery, GetRecipesByRecipeCategoryUrlQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecipesByRecipeCategoryUrlQuery, GetRecipesByRecipeCategoryUrlQueryVariables>(GetRecipesByRecipeCategoryUrlDocument, options);
        }
export type GetRecipesByRecipeCategoryUrlQueryHookResult = ReturnType<typeof useGetRecipesByRecipeCategoryUrlQuery>;
export type GetRecipesByRecipeCategoryUrlLazyQueryHookResult = ReturnType<typeof useGetRecipesByRecipeCategoryUrlLazyQuery>;
export type GetRecipesByRecipeCategoryUrlSuspenseQueryHookResult = ReturnType<typeof useGetRecipesByRecipeCategoryUrlSuspenseQuery>;
export type GetRecipesByRecipeCategoryUrlQueryResult = Apollo.QueryResult<GetRecipesByRecipeCategoryUrlQuery, GetRecipesByRecipeCategoryUrlQueryVariables>;