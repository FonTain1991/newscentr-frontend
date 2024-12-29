/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetRecipeByUrlQueryVariables = Types.Exact<{
  url: Types.Scalars['String']['input'];
  recipeCategoryUrl: Types.Scalars['String']['input'];
}>;


export type GetRecipeByUrlQuery = { __typename?: 'Query', getRecipeByUrl?: { __typename?: 'Recipe', id: string, pageName: string, pageTitle: string, url: string, text: string, createdAt?: any | null, updatedAt?: any | null, isPublish: boolean, recipeCategoryId: string, keywords?: string | null, description: string, previewId?: string | null, previewAlt?: string | null, previewTitle?: string | null, activeCookingTime?: any | null, totalCookingTime?: any | null, countSee: number, ingredients: Array<{ __typename?: 'RecipeIngredient', id?: string | null, value?: string | null, note?: string | null, ingredient: { __typename?: 'Ingredient', title: string } }>, rubric: { __typename?: 'RecipeCategory', url: string, name: string } } | null };


export const GetRecipeByUrlDocument = gql`
    query getRecipeByUrl($url: String!, $recipeCategoryUrl: String!) {
  getRecipeByUrl(url: $url, recipeCategoryUrl: $recipeCategoryUrl) {
    id
    pageName
    pageTitle
    url
    text
    createdAt
    updatedAt
    isPublish
    recipeCategoryId
    keywords
    description
    previewId
    previewAlt
    previewTitle
    activeCookingTime
    totalCookingTime
    ingredients {
      id
      value
      note
      ingredient {
        title
      }
    }
    rubric {
      url
      name
    }
    countSee
  }
}
    `;

/**
 * __useGetRecipeByUrlQuery__
 *
 * To run a query within a React component, call `useGetRecipeByUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeByUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeByUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *      recipeCategoryUrl: // value for 'recipeCategoryUrl'
 *   },
 * });
 */
export function useGetRecipeByUrlQuery(baseOptions: Apollo.QueryHookOptions<GetRecipeByUrlQuery, GetRecipeByUrlQueryVariables> & ({ variables: GetRecipeByUrlQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecipeByUrlQuery, GetRecipeByUrlQueryVariables>(GetRecipeByUrlDocument, options);
      }
export function useGetRecipeByUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecipeByUrlQuery, GetRecipeByUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecipeByUrlQuery, GetRecipeByUrlQueryVariables>(GetRecipeByUrlDocument, options);
        }
export function useGetRecipeByUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRecipeByUrlQuery, GetRecipeByUrlQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecipeByUrlQuery, GetRecipeByUrlQueryVariables>(GetRecipeByUrlDocument, options);
        }
export type GetRecipeByUrlQueryHookResult = ReturnType<typeof useGetRecipeByUrlQuery>;
export type GetRecipeByUrlLazyQueryHookResult = ReturnType<typeof useGetRecipeByUrlLazyQuery>;
export type GetRecipeByUrlSuspenseQueryHookResult = ReturnType<typeof useGetRecipeByUrlSuspenseQuery>;
export type GetRecipeByUrlQueryResult = Apollo.QueryResult<GetRecipeByUrlQuery, GetRecipeByUrlQueryVariables>;