import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import PersonalArea from "./PersonalArea"
import * as reduxHooks from "react-redux"
import { IUser } from "../../interfaces/users.interface"
import { UserOrdersStatus } from "../../enums/User.enum"

jest.mock('react-redux')
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')

const userProfileNoOrders: IUser = {
    profile: {
        id: 1,
        name: 'myName',
        email: 'name@mail.ru',
        orders: []
    },
    isVisibleAuthForm: false
}
const userProfileOrders: IUser = {
    profile: {
        id: 1,
        name: 'myName',
        email: 'name@mail.ru',
        orders: [
            {
                id: 1,
                name: 'Букет цветов',
                number: 5,
                price: 15000,
                status: UserOrdersStatus.PAID
            },
            {
                id: 2,
                name: 'Букет тюльпанов',
                number: 3,
                price: 10500,
                status: UserOrdersStatus.AWAITINGPAYMENT
            }
        ]
    },
    isVisibleAuthForm: false
}

describe('PersonalArea component', () => {
    it('PersonalArea renders without data', () => {
        mockedUseSelector.mockReturnValue(userProfileNoOrders.profile)
        render(<PersonalArea />)
        expect(screen.getByText(/Личный кабинет/i)).toBeInTheDocument()
        expect(screen.queryByText(/Букет тюльпанов/i)).toBeNull()
    })
    it('PersonalArea renders with data', () => {
        mockedUseSelector.mockReturnValue(userProfileOrders.profile)
        render(<PersonalArea />)
        expect(screen.getByText(/Букет тюльпанов/i)).toBeInTheDocument()
    })
    it('PersonalArea empty snapshot', () => {
        mockedUseSelector.mockReturnValue(userProfileNoOrders.profile)
        const component = render(<PersonalArea />)
        expect(component).toMatchSnapshot()
    })
    it('PersonalArea snapshot', () => {
        mockedUseSelector.mockReturnValue(userProfileOrders.profile)
        const component = render(<PersonalArea />)
        expect(component).toMatchSnapshot()
    })
})