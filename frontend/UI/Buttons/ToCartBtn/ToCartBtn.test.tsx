import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import ToCartBtn from "./ToCartBtn"

describe('ToCartBtn', () => {
    it('ToCartBtn render', ()=>{
        render(<ToCartBtn />)
        expect(screen.getByText(/в корзину/i)).toBeInTheDocument()
    })
    it('ToCartBtn isBuyProduct', ()=>{
        render(<ToCartBtn isBuyProduct={true}/>)
        expect(screen.getByText(/в корзине/i)).toBeInTheDocument()
    })
    it('ToCartBtn содержит textAfterClick', ()=>{
        render(<ToCartBtn isBuyProduct={true} textAfterClick='текст' />)
        expect(screen.getByText(/текст/i)).toBeInTheDocument()
    })
    it('ToCartBtn темный', ()=>{
        const { container } = render(<ToCartBtn dark={true} />)
        const boxes = container.getElementsByClassName('dark')
        expect(boxes.length).toBe(1)
    })
    it('ToCartBtn snapshot', ()=>{
        const el = render(<ToCartBtn />)
        expect(el).toMatchSnapshot()
    })
})