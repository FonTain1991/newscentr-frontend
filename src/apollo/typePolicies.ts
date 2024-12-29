import { TypedTypePolicies } from '@/types/typePolicies'

export const typePolicies: TypedTypePolicies = {
  Query: {
    fields: {
      // getLatestRecipes: {
      //   keyArgs: false,
      //   merge(existing, incoming, {
      //     args: { cursor },
      //     readField,
      //   }: { args: any, readField: any }) {
      //     const merged = existing ? existing.slice(0) : []
      //     let offset = offsetFromCursor(merged, cursor, readField)
      //     // If we couldn't find the cursor, default to appending to
      //     // the end of the list, so we don't lose any data.
      //     if (offset < 0) {
      //       offset = merged.length
      //     }
      //     // Now that we have a reliable offset, the rest of this logic
      //     // is the same as in offsetLimitPagination.
      //     for (let i = 0; i < incoming.length; ++i) {
      //       merged[offset + i] = incoming[i]
      //     }
      //     return merged
      //   },

      //   // If you always want to return the whole list, you can omit
      //   // this read function.
      //   read(existing, {
      //     args: { cursor, limit = existing?.length },
      //     readField,
      //   }: { args: any, readField: any }) {
      //     if (existing) {
      //       let offset = offsetFromCursor(existing, cursor, readField)
      //       // If we couldn't find the cursor, default to reading the
      //       // entire list.
      //       if (offset < 0) {
      //         offset = 0
      //       }
      //       return existing.slice(offset, offset + limit)
      //     }
      //   },
      // }
    }
  },
  Mutation: {

  }
}

function offsetFromCursor(items: any, cursor: string, readField: any) {
  for (let i = items.length - 1; i >= 0; --i) {
    const item = items[i]
    if (readField('id', item) === cursor) {
      return i + 1
    }
  }
  return -1
}