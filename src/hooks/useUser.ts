import { useMeSuspenseQuery } from '@/gql/me'

export function useUser() {
  const { data } = useMeSuspenseQuery()
  return data?.me
}