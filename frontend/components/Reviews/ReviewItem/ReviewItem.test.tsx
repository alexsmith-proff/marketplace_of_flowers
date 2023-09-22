import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ReviewItem from './ReviewItem'
import { IElement } from '../../../interfaces/section.interface'
import { debug } from 'console'

const data: IElement = {
    id: 1,
    name: 'name',
    slug: 'name',
    img_elements: [],
    text_elements: [
        {
            id: 11,
            name: 'text1',
            slug: 'ocenka',
            text: '5'
        },
        {
            id: 12,
            name: 'text2',
            slug: 'name',
            text: 'имя'
        },
        {
            id: 13,
            name: 'text3',
            slug: 'otzyv',
            text: 'отзыв'
        },
        {
            id: 14,
            name: 'text4',
            slug: 'otzyv-k-buketu',
            text: 'текст'
        }
    ],
    product_ref: null
}

describe('ReviewItem test', () => {
    it('Render ReviewsStar', () => {
        render(<ReviewItem review={data} imgSrc='/file.png'  imgAlt='file-img'/>)
        expect(screen.getByText(/имя/i)).toBeInTheDocument()
        expect(screen.getByText(/отзыв/)).toBeInTheDocument()
        expect(screen.getByText(/текст/i)).toBeInTheDocument()
    })
    it('ReviewItem snapshot', () => {
        expect(render(<ReviewItem review={data} imgSrc='/file.png'  imgAlt='file-img'/>)).toMatchSnapshot()
    })
})