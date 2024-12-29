export const groupBy = (items: any, key: string) => {
  return items?.reduce((prev: any, cur: any) => {
    (prev[cur[key]] = prev[cur[key]] || []).push(cur)
    return prev
  }, {}) || {}
}

interface ITree {
  items: any
  foreignKey: string
  targetKey: string
  parent?: string | null
}

export const tree = ({ items, foreignKey, targetKey, parent }: ITree) => {
  const group = groupBy(items, targetKey)

  function mapChildren(items: any) {
    if (items === undefined) {
      return []
    }
    return items.map((v: any) => {
      return {
        ...v,
        children: mapChildren(group[v[foreignKey]])
      }
    })
  }

  return mapChildren(group[String(parent)])
}