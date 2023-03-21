export interface ICatalogBase {
  id: number
  name: string
}
export interface ICatalog extends ICatalogBase {
  slug: string
  serial_number: number
  children: ICatalog[]
  parent: ICatalog
  filenames_images: string[]
}
export interface ICatalogCards {
  title: string
  cards: ICatalog[]
}
