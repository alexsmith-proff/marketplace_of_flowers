import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GalleryItem from './GalleryItem'

describe('Partitions test', () => {
    it('Render', () => {
        const { container } = render(<GalleryItem imgSrc='/photo.png' imgAlt='photo' />)
        const boxes = container.getElementsByClassName('item')
        expect(boxes.length).toBe(1)
    })
    it('Partitions snapshot', () =>{
        expect(render(<GalleryItem imgSrc='/photo.png' imgAlt='photo' />)).toMatchSnapshot()
    })
})