/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateRecipeCountSeeMutationVariables = Types.Exact<{
  url: Types.Scalars['String']['input'];
}>;


export type UpdateRecipeCountSeeMutation = { __typename?: 'Mutation', updateRecipeCountSee?: Array<{ __typename?: 'Recipe', id: string, countSee: number }> | null };


export const UpdateRecipeCountSeeDocument = gql`
    mutation updateRecipeCountSee($url: String!) {
  updateRecipeCountSee(url: $url) {
    id
    countSee
  }
}
    `;
export type UpdateRecipeCountSeeMutationFn = Apollo.MutationFunction<UpdateRecipeCountSeeMutation, UpdateRecipeCountSeeMutationVariables>;

/**
 * __useUpdateRecipeCountSeeMutation__
 *
 * To run a mutation, you first call `useUpdateRecipeCountSeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRecipeCountSeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRecipeCountSeeMutation, { data, loading, error }] = useUpdateRecipeCountSeeMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useUpdateRecipeCountSeeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRecipeCountSeeMutation, UpdateRecipeCountSeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRecipeCountSeeMutation, UpdateRecipeCountSeeMutationVariables>(UpdateRecipeCountSeeDocument, options);
      }
export type UpdateRecipeCountSeeMutationHookResult = ReturnType<typeof useUpdateRecipeCountSeeMutation>;
export type UpdateRecipeCountSeeMutationResult = Apollo.MutationResult<UpdateRecipeCountSeeMutation>;
export type UpdateRecipeCountSeeMutationOptions = Apollo.BaseMutationOptions<UpdateRecipeCountSeeMutation, UpdateRecipeCountSeeMutationVariables>;