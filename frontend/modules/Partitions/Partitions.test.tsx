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
                    filename: 'filename1'
                },
                {
                    id: 102,
                    slug: 'slug_img2',
                    name: 'img2',
                    filename: 'filename2'
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
  it('Render Header', () => {
    render(<Partitions partitionSection={data} />)
    const el = screen.getByText(/Разделы/)
    expect(el).toBeInTheDocument()
  })
  it('Render text1', () => {
    render(<Partitions partitionSection={data} />)
    const el = screen.getByText('text1')
    expect(el).toBeInTheDocument()
  })
  it('Render price', () => {
    render(<Partitions partitionSection={data} />)
    const el = screen.getByText('500')
    expect(el).toBeInTheDocument()
  })
})