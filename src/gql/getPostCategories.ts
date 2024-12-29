/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostCategoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPostCategoriesQuery = { __typename?: 'Query', getPostCategories: Array<{ __typename?: 'PostCategory', id: string, url: string, name: string, parentId?: string | null, children?: Array<{ __typename?: 'PostCategory', id: string, url: string, name: string, parentId?: string | null }> | null }> };


export const GetPostCategoriesDocument = gql`
    query getPostCategories {
  getPostCategories {
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
 * __useGetPostCategoriesQuery__
 *
 * To run a query within a React component, call `useGetPostCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetPostCategoriesQuery, GetPostCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostCategoriesQuery, GetPostCategoriesQueryVariables>(GetPostCategoriesDocument, options);
      }
export function useGetPostCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostCategoriesQuery, GetPostCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostCategoriesQuery, GetPostCategoriesQueryVariables>(GetPostCategoriesDocument, options);
        }
export function useGetPostCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostCategoriesQuery, GetPostCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostCategoriesQuery, GetPostCategoriesQueryVariables>(GetPostCategoriesDocument, options);
        }
export type GetPostCategoriesQueryHookResult = ReturnType<typeof useGetPostCategoriesQuery>;
export type GetPostCategoriesLazyQueryHookResult = ReturnType<typeof useGetPostCategoriesLazyQuery>;
export type GetPostCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetPostCategoriesSuspenseQuery>;
export type GetPostCategoriesQueryResult = Apollo.QueryResult<GetPostCategoriesQuery, GetPostCategoriesQueryVariables>;