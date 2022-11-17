interface IBase {
    id: number
    name: string
    slug: string

}
interface ITextElement extends IBase {
    text: string
}
interface IImgElement extends IBase {
    filename: string
}
export interface IElement extends IBase{
    text_elements: ITextElement[]
    img_elements: IImgElement[]
}
export interface ISection extends IBase {
    elements: IElement[]
}