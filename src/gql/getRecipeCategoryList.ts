/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetRecipeCategoryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetRecipeCategoryQuery = { __typename?: 'Query', getRecipeCategory?: Array<{ __typename?: 'RecipeCategory', id: string, url: string }> | null };


export const GetRecipeCategoryDocument = gql`
    query getRecipeCategory {
  getRecipeCategory {
    id
    url
  }
}
    `;

/**
 * __useGetRecipeCategoryQuery__
 *
 * To run a query within a React component, call `useGetRecipeCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecipeCategoryQuery(baseOptions?: Apollo.QueryHookOptions<GetRecipeCategoryQuery, GetRecipeCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecipeCategoryQuery, GetRecipeCategoryQueryVariables>(GetRecipeCategoryDocument, options);
      }
export function useGetRecipeCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecipeCategoryQuery, GetRecipeCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecipeCategoryQuery, GetRecipeCategoryQueryVariables>(GetRecipeCategoryDocument, options);
        }
export function useGetRecipeCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRecipeCategoryQuery, GetRecipeCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecipeCategoryQuery, GetRecipeCategoryQueryVariables>(GetRecipeCategoryDocument, options);
        }
export type GetRecipeCategoryQueryHookResult = ReturnType<typeof useGetRecipeCategoryQuery>;
export type GetRecipeCategoryLazyQueryHookResult = ReturnType<typeof useGetRecipeCategoryLazyQuery>;
export type GetRecipeCategorySuspenseQueryHookResult = ReturnType<typeof useGetRecipeCategorySuspenseQuery>;
export type GetRecipeCategoryQueryResult = Apollo.QueryResult<GetRecipeCategoryQuery, GetRecipeCategoryQueryVariables>;