import { UserOrdersStatus } from "../enums/User.enum"

export interface IOrderInput {
    number: number
    name: string
    price: number
    status: UserOrdersStatus
    deliveryDate: string
    user_id: number
}

export interface IOrder {
    id?: number,
    number?: number,
    name?: string,
    deliveryDate?: string,
    status?: UserOrdersStatus,
    price?: number,
}