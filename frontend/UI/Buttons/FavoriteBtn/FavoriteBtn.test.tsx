import { render } from "@testing-library/react"
import FavoriteBtn from "./FavoriteBtn"

describe('FavoriteBtn', () => {
    it('FavoriteBtn render', () => {
        const { container } = render(<FavoriteBtn />)
        const boxes = container.getElementsByClassName('favoriteBtn')
        expect(boxes.length).toBe(1)
    })
    it('FavoriteBtn backgroundLight', () => {
        const { container } = render(<FavoriteBtn backgroundLight={true} />)
        const boxes = container.getElementsByClassName('light')
        expect(boxes.length).toBe(1)
    })
    it('FavoriteBtn snapshot', () => {
        const el = render(<FavoriteBtn backgroundLight={true} />)
        expect(el).toMatchSnapshot()
    })
})