import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Discount from "./Discount"

describe('Discount block', () => {
    test('Render text', () => {
        render(<Discount discount={5} />)
        expect(screen.getByText('Цены на сайте отображаются с учётом вашей скидки')).toBeInTheDocument()        
    })
    test('Render discount number', () => {
        render(<Discount discount={5} />)
        expect(screen.getByText('5%')).toBeInTheDocument()        
    })
})