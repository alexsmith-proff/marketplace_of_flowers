import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import CardPrice from "./CardPrice"

describe('CardPrice',()=>{
    it('CardPrice render', ()=>{
        render(<CardPrice actualPrice={100} size={14} />)
        expect(screen.getByText(/100/)).toBeInTheDocument()
    })
    it('CardPrice with crossPrice', ()=>{
        const { container } =  render(<CardPrice actualPrice={100} size={14} crossPrice={50} />)
        const boxes = container.getElementsByClassName('crossPrice')
        expect(boxes.length).toBe(1)
        expect(screen.getByText(/50/)).toBeInTheDocument()
    })
    it('CardPrice without crossPrice', ()=>{
        const { container } = render(<CardPrice actualPrice={100} size={14} />)
        const boxes = container.getElementsByClassName('crossPrice')
        expect(boxes.length).toBe(0)
    })
})