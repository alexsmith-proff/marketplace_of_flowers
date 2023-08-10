import { UserOrdersStatus } from "../enums/User.enum"

interface IProfile {
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    role?: string,
    createdAt?: Date,
    updatedAt?: Date,
    orders?: IOrder[],
}

interface IOrder {
    id?: number,
    number?: number,
    name?: string,
    deliveryDate?: string,
    status?: UserOrdersStatus,
    price?: number,
}

export interface IUser {
    profile: IProfile,
    isVisibleAuthForm: boolean,
}