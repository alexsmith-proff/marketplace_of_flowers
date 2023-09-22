import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NewsItem from './NewsItem'

describe('NewsItem test', () => {
    it('Render NewsItem', () => {
        render(<NewsItem imgSrc='/file.png' imgAlt='img' title='title' text='text' date='date' />)
        expect(screen.getByText(/title/i)).toBeInTheDocument()
        expect(screen.getByText(/text/i)).toBeInTheDocument()
    })
    it('NewsItem snapshot', () => {
        expect(render(<NewsItem imgSrc='/file.png' imgAlt='img' title='title' text='text' date='date' />)).toMatchSnapshot()
    })
})