/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetBreadcrumbQueryVariables = Types.Exact<{
  params: Types.Scalars['String']['input'];
}>;


export type GetBreadcrumbQuery = { __typename?: 'Query', getBreadcrumb: { __typename?: 'Breadcrumb', category?: { __typename?: 'RecipeCategory', name: string, url: string } | null, post?: { __typename?: 'Recipe', pageName: string, url: string } | null } };


export const GetBreadcrumbDocument = gql`
    query getBreadcrumb($params: String!) {
  getBreadcrumb(params: $params) {
    category {
      name
      url
    }
    post {
      pageName
      url
    }
  }
}
    `;

/**
 * __useGetBreadcrumbQuery__
 *
 * To run a query within a React component, call `useGetBreadcrumbQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBreadcrumbQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBreadcrumbQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetBreadcrumbQuery(baseOptions: Apollo.QueryHookOptions<GetBreadcrumbQuery, GetBreadcrumbQueryVariables> & ({ variables: GetBreadcrumbQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBreadcrumbQuery, GetBreadcrumbQueryVariables>(GetBreadcrumbDocument, options);
      }
export function useGetBreadcrumbLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBreadcrumbQuery, GetBreadcrumbQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBreadcrumbQuery, GetBreadcrumbQueryVariables>(GetBreadcrumbDocument, options);
        }
export function useGetBreadcrumbSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBreadcrumbQuery, GetBreadcrumbQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBreadcrumbQuery, GetBreadcrumbQueryVariables>(GetBreadcrumbDocument, options);
        }
export type GetBreadcrumbQueryHookResult = ReturnType<typeof useGetBreadcrumbQuery>;
export type GetBreadcrumbLazyQueryHookResult = ReturnType<typeof useGetBreadcrumbLazyQuery>;
export type GetBreadcrumbSuspenseQueryHookResult = ReturnType<typeof useGetBreadcrumbSuspenseQuery>;
export type GetBreadcrumbQueryResult = Apollo.QueryResult<GetBreadcrumbQuery, GetBreadcrumbQueryVariables>;