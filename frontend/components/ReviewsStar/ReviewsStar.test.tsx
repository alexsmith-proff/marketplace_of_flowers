import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ReviewsStar from './ReviewsStar'


describe('ReviewsStar test', () => {
    it('Render ReviewsStar', () => {
        render(<ReviewsStar stars={5} />)
        expect(screen.getByRole('list').children.length).toBe(5)
    })
    it('Partitions snapshot', () => {
        expect(render(<ReviewsStar stars={5} />)).toMatchSnapshot()
    })
})