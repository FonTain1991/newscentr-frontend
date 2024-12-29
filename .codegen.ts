
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: ['client.schema.gql', 'http://localhost:4444/v1'],
  documents: ['./**/*.gql'],
  ignoreNoDocuments: true,
  generates: {
    './src/types/typePolicies.ts': {
      plugins: [
        'typescript-apollo-client-helpers',
        {
          add: {
            content: '/* eslint-disable */ \n/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */'
          }
        }
      ]
    },
    './src/types/graphql.ts': {
      plugins: [
        'typescript',
        {
          add: {
            content: '/* eslint-disable */ \n/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */'
          }
        }
      ],
    },
    './': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.ts',
        baseTypesPath: './src/types/graphql'
      },
      plugins: [
        'typescript-operations',
        'typescript-react-apollo',
        {
          add: {
            content: '/* eslint-disable */ \n/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */'
          }
        }
      ],
      config: {
        // withRefetchFn: true,
        // skipTypename: true,
        // apolloReactHooksImportFrom: '@app/lib/apollo-hooks'
      }
    }
  }
}

export default config
