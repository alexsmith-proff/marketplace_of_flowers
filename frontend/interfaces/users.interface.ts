import { UserOrdersStatus } from "../enums/User.enum"

interface IProfile {
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    role?: string,
    createdAt?: Date,
    updatedAt?: Date
}

interface IOrder {
    id?: number,
    number?: number,
    name?: string,
    date?: Date,
    receiver?: string,
    status?: UserOrdersStatus,
    price?: number
}

export interface IUser {
    profile: IProfile
    orders: IOrder[]
}