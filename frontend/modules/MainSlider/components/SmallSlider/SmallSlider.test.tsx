import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import SmallSliderItem from '../SmallSliderItem/SmallSliderItem'
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
            name: 'название',
            slug: 'nazvanie',
            text: 'название'
        },
        {
            id: 2,
            name: 'описание',
            slug: 'opisanie',
            text: 'описание'
        },
        {
            id: 3,
            name: 'цена',
            slug: 'cena',
            text: 'цена'
        }
    ],
    product_ref: null
}
describe('BigSliderItem', () => {
    it('BigSliderItem текст', () => {
        process.env.API_URI_DOCKER = 'http://localhost'
        render(<SmallSliderItem slider={data} />)
        expect(screen.getByText(/название/i)).toBeInTheDocument()
        expect(screen.getByText(/описание/i)).toBeInTheDocument()
        expect(screen.getByText(/цена/i)).toBeInTheDocument()
    })
    it('BigSliderItem snapshot', () => {
        process.env.API_URI_DOCKER = 'http://localhost'
        const value = render(<SmallSliderItem slider={data} />)
        expect(value).toMatchSnapshot()
    })

})