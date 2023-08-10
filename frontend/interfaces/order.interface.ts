import { UserOrdersStatus } from "../enums/User.enum"

export interface IOrderInput {
    number: number
    name: string
    price: number
    status: UserOrdersStatus
    deliveryDate: Date
    user_id: number
}