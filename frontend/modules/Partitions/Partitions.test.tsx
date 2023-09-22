import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Partitions from './Partitions'
import { ISection } from '../../interfaces/section.interface'

const data: ISection = {
    id: 1,
    name: 'Имя',
    slug: 'slug',
    elements: [
        {
            id: 10,
            name: 'Элемент',
            slug: 'slug_elem',
            img_elements: [
                {
                    id: 101,
                    slug: 'slug_img1',
                    name: 'img1',
                    filename: 'http://filename1.png'
                },
                {
                    id: 102,
                    slug: 'slug_img2',
                    name: 'img2',
                    filename: 'http://filename2.png'
                }
            ],
            text_elements: [
                {
                    id: 1001,
                    slug: 'title',
                    name: 'text_el1',
                    text: 'text1'
                },
                {
                    id: 1002,
                    slug: 'cena',
                    name: 'text_el2',
                    text: '500'
                },
            ],
            product_ref: null
        }
    ]
}
describe('Partitions test', () => {
    process.env.API_URI_DOCKER = 'http://localhost'
    it('Render Partitions', () => {
        render(<Partitions partitionSection={data} />)
        expect(screen.getByText(/Разделы/)).toBeInTheDocument()
        expect(screen.getByText('text1')).toBeInTheDocument()
        expect(screen.getByText('500')).toBeInTheDocument()
    })
    it('Partitions snapshot', () => {
        expect(render(<Partitions partitionSection={data} />)).toMatchSnapshot()
    })
})