/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdatePostCountSeeMutationVariables = Types.Exact<{
  url: Types.Scalars['String']['input'];
}>;


export type UpdatePostCountSeeMutation = { __typename?: 'Mutation', updatePostCountSee?: { __typename?: 'Post', id: string, countSee: number } | null };


export const UpdatePostCountSeeDocument = gql`
    mutation updatePostCountSee($url: String!) {
  updatePostCountSee(url: $url) {
    id
    countSee
  }
}
    `;
export type UpdatePostCountSeeMutationFn = Apollo.MutationFunction<UpdatePostCountSeeMutation, UpdatePostCountSeeMutationVariables>;

/**
 * __useUpdatePostCountSeeMutation__
 *
 * To run a mutation, you first call `useUpdatePostCountSeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostCountSeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostCountSeeMutation, { data, loading, error }] = useUpdatePostCountSeeMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useUpdatePostCountSeeMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostCountSeeMutation, UpdatePostCountSeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostCountSeeMutation, UpdatePostCountSeeMutationVariables>(UpdatePostCountSeeDocument, options);
      }
export type UpdatePostCountSeeMutationHookResult = ReturnType<typeof useUpdatePostCountSeeMutation>;
export type UpdatePostCountSeeMutationResult = Apollo.MutationResult<UpdatePostCountSeeMutation>;
export type UpdatePostCountSeeMutationOptions = Apollo.BaseMutationOptions<UpdatePostCountSeeMutation, UpdatePostCountSeeMutationVariables>;