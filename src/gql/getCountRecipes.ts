/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCountRecipesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCountRecipesQuery = { __typename?: 'Query', getCountRecipes: { __typename?: 'Recipe', total: number } };


export const GetCountRecipesDocument = gql`
    query getCountRecipes {
  getCountRecipes {
    total
  }
}
    `;

/**
 * __useGetCountRecipesQuery__
 *
 * To run a query within a React component, call `useGetCountRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountRecipesQuery(baseOptions?: Apollo.QueryHookOptions<GetCountRecipesQuery, GetCountRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountRecipesQuery, GetCountRecipesQueryVariables>(GetCountRecipesDocument, options);
      }
export function useGetCountRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountRecipesQuery, GetCountRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountRecipesQuery, GetCountRecipesQueryVariables>(GetCountRecipesDocument, options);
        }
export function useGetCountRecipesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCountRecipesQuery, GetCountRecipesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCountRecipesQuery, GetCountRecipesQueryVariables>(GetCountRecipesDocument, options);
        }
export type GetCountRecipesQueryHookResult = ReturnType<typeof useGetCountRecipesQuery>;
export type GetCountRecipesLazyQueryHookResult = ReturnType<typeof useGetCountRecipesLazyQuery>;
export type GetCountRecipesSuspenseQueryHookResult = ReturnType<typeof useGetCountRecipesSuspenseQuery>;
export type GetCountRecipesQueryResult = Apollo.QueryResult<GetCountRecipesQuery, GetCountRecipesQueryVariables>;