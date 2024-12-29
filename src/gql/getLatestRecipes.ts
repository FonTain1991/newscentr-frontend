/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetLatestRecipesQueryVariables = Types.Exact<{
  cursor?: Types.InputMaybe<Types.Scalars['String']['input']>;
  take?: Types.InputMaybe<Types.Scalars['Float']['input']>;
}>;


export type GetLatestRecipesQuery = { __typename?: 'Query', getLatestRecipes?: Array<{ __typename?: 'Recipe', id: string, previewId?: string | null, pageName: string, url: string, rubric: { __typename?: 'RecipeCategory', url: string, name: string } }> | null };


export const GetLatestRecipesDocument = gql`
    query getLatestRecipes($cursor: String, $take: Float) {
  getLatestRecipes(cursor: $cursor, take: $take) {
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
 * __useGetLatestRecipesQuery__
 *
 * To run a query within a React component, call `useGetLatestRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestRecipesQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetLatestRecipesQuery(baseOptions?: Apollo.QueryHookOptions<GetLatestRecipesQuery, GetLatestRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLatestRecipesQuery, GetLatestRecipesQueryVariables>(GetLatestRecipesDocument, options);
      }
export function useGetLatestRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLatestRecipesQuery, GetLatestRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLatestRecipesQuery, GetLatestRecipesQueryVariables>(GetLatestRecipesDocument, options);
        }
export function useGetLatestRecipesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLatestRecipesQuery, GetLatestRecipesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLatestRecipesQuery, GetLatestRecipesQueryVariables>(GetLatestRecipesDocument, options);
        }
export type GetLatestRecipesQueryHookResult = ReturnType<typeof useGetLatestRecipesQuery>;
export type GetLatestRecipesLazyQueryHookResult = ReturnType<typeof useGetLatestRecipesLazyQuery>;
export type GetLatestRecipesSuspenseQueryHookResult = ReturnType<typeof useGetLatestRecipesSuspenseQuery>;
export type GetLatestRecipesQueryResult = Apollo.QueryResult<GetLatestRecipesQuery, GetLatestRecipesQueryVariables>;