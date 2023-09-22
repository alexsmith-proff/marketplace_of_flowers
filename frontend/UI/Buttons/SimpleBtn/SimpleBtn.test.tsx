import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SimpleBtn from './SimpleBtn'

const onClick = jest.fn()

describe('SimpleBtn test', () => {
    it('Render SimpleBtn', () => {
        render(<SimpleBtn text='text' click={onClick} />)
        expect(screen.getByText(/text/)).toBeInTheDocument()
    })
    it('Styles SimpleBtn', () => {
        render
            (
                <SimpleBtn
                    text='text'
                    maxWith={100}
                    paddingTop={10}
                    paddingBottom={20}
                    paddingLeft={30}
                    paddingRight={40}
                    fontSize={16}
                    color='FFFFFF'
                    backgroundColor='FF00FF'
                    border='1px solid #000'
                    borderRadius={50}
                    click={onClick}
                />
            )
        expect(screen.getByTestId('comp')).toHaveStyle({
            width: '100px',
            paddingTop: '10px',
            paddingBottom: '20px',
            paddingLeft: '30px',
            paddingRight: '40px',
            fontSize: '16px',
            color: 'FFFFFF',
            backgroundColor: 'FF00FF',
            border: '1px solid #000',
            borderRadius: '50px',
        })
    })
    it('SimpleBtn snapshot', () => {
        expect(render(<SimpleBtn text='text' click={onClick} />)).toMatchSnapshot()
    })
})