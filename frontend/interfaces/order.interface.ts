import { UserOrdersStatus } from "../enums/User.enum"

export interface IOrderInput {
    number: number
    name: string
    price: number
    status: UserOrdersStatus
    deliveryDate: string
    user_id: number
}