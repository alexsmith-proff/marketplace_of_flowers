import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import ProfileMenu from "./ProfileMenu"

describe('ProfileMenu', () => {
    const Change = (ind) => {}
    it('render', () => {
        render(<ProfileMenu menuItem={0} changeMenuItem={Change} />)
        expect(screen.getByText(/личный кабинет/i)).toBeInTheDocument()
    })
})