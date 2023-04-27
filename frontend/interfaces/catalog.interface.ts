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

export interface ICatalogProduct extends ICatalogBase {
  slug: string
  price: number
  count_in_stock: number
  main_image: string
  filenames_images: string[]
}
