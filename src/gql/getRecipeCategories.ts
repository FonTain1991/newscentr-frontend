/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetRecipeCategoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetRecipeCategoriesQuery = { __typename?: 'Query', getRecipeCategories: Array<{ __typename?: 'RecipeCategory', id: string, url: string, name: string, parentId?: string | null, children: Array<{ __typename?: 'RecipeCategory', id: string, url: string, name: string, parentId?: string | null }> }> };


export const GetRecipeCategoriesDocument = gql`
    query getRecipeCategories {
  getRecipeCategories {
    id
    url
    name
    parentId
    children {
      id
      url
      name
      parentId
    }
  }
}
    `;

/**
 * __useGetRecipeCategoriesQuery__
 *
 * To run a query within a React component, call `useGetRecipeCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecipeCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetRecipeCategoriesQuery, GetRecipeCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecipeCategoriesQuery, GetRecipeCategoriesQueryVariables>(GetRecipeCategoriesDocument, options);
      }
export function useGetRecipeCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecipeCategoriesQuery, GetRecipeCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecipeCategoriesQuery, GetRecipeCategoriesQueryVariables>(GetRecipeCategoriesDocument, options);
        }
export function useGetRecipeCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRecipeCategoriesQuery, GetRecipeCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecipeCategoriesQuery, GetRecipeCategoriesQueryVariables>(GetRecipeCategoriesDocument, options);
        }
export type GetRecipeCategoriesQueryHookResult = ReturnType<typeof useGetRecipeCategoriesQuery>;
export type GetRecipeCategoriesLazyQueryHookResult = ReturnType<typeof useGetRecipeCategoriesLazyQuery>;
export type GetRecipeCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetRecipeCategoriesSuspenseQuery>;
export type GetRecipeCategoriesQueryResult = Apollo.QueryResult<GetRecipeCategoriesQuery, GetRecipeCategoriesQueryVariables>;