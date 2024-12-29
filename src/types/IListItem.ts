export interface IListItem {
  id: string,
  previewId: string,
  rubric: {
    url: string
    name: string
  }
  pageName: string
  url: string
}