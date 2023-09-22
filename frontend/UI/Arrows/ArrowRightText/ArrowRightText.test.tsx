import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ArrowRightText from './ArrowRightText'

describe('ArrowRightText test', () => {
    it('Render ArrowRightText', () => {
        render(<ArrowRightText text='текст' />)
        expect(screen.getByText(/текст/i)).toBeInTheDocument()
    })
    it('ReviewItem snapshot', () => {
        expect(render(<ArrowRightText text='текст' />)).toMatchSnapshot()
    })
})