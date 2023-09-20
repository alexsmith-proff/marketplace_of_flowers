import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import BigSliderItem from "./BigSliderItem"
import { IElement } from "../../../../interfaces/section.interface"

const data: IElement = {
    id: 1,
    name: 'data',
    slug: 'data',
    img_elements: [
        {
            id: 1,
            name: 'изображение',
            slug: 'background',
            filename: '1.png',
        }
    ],
    text_elements: [
        {
            id: 1,
            name: 'текст в верху',
            slug: 'tekst-vverkhu',
            text: 'верхний текст'
        },
        {
            id: 2,
            name: 'текст в середине',
            slug: 'tekst-v-seredine',
            text: 'средний текст'
        },
        {
            id: 3,
            name: 'текст промокод',
            slug: 'promokod-tekst',
            text: 'промокод'
        }
    ],
    product_ref: null
}
describe('BigSliderItem', () => {
    it('BigSliderItem текст', () => {
        process.env.API_URI_DOCKER = 'http://localhost'
        render(<BigSliderItem slider={data} />)
        expect(screen.getByText(/верхний текст/i)).toBeInTheDocument()
        expect(screen.getByText(/средний текст/i)).toBeInTheDocument()
        expect(screen.getByText(/промокод/i)).toBeInTheDocument()
    })
    it('BigSliderItem snapshot', () => {
        process.env.API_URI_DOCKER = 'http://localhost'
        const value = render(<BigSliderItem slider={data} />)
        expect(value).toMatchSnapshot()
    })

})