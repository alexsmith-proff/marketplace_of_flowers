import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import PrivilegeItem from "./PrivilegeItem"

describe('PrivilegeItem', () => {
    it('PrivilegeItem render', () => {
        render(<PrivilegeItem fileName="/file.png" text="текст" />)
        expect(screen.getByRole('listitem')).toBeInTheDocument()
    })

    it('PrivilegeItem есть текст', () => {
        render(<PrivilegeItem fileName="/file.png" text="текст" />)
        expect(screen.getByText(/текст/)).toBeInTheDocument()
    })

    it('PrivilegeItem snapshot', () => {
        
        expect(render(<PrivilegeItem fileName="/file.png" text="текст" />)).toMatchSnapshot()
    })
})