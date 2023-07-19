interface IBlogBase {
    id?: number
    name?: string
  }
  export interface IBlog extends IBlogBase {
    slug?: string
    filename_image?: string
    title?: string
    text?: string
    data?: string
  }
