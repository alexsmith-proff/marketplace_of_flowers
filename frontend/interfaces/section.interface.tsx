import { IAdminProduct } from "./products.interface"

interface IBase {
    id: number
    name: string
    slug: string

}
export interface ITextElement extends IBase {
    text: string
}
export interface IImgElement extends IBase {
    filename: string
}
export interface IElement extends IBase{
    text_elements: ITextElement[]
    img_elements: IImgElement[]
    product: IAdminProduct
}
export interface ISection extends IBase {
    elements: IElement[]
}

export interface INameSlugInput {
    name: string
    slug: string
    product_id: number
}


export interface ICreateBlockTextInput {
    name: string
    slug: string
    text: string
}

export interface INameSlug {
    name: string
    slug: string
}