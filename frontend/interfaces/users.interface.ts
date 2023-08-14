import { IOrder } from "./order.interface";

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


export interface IUser {
    profile: IProfile,
    isVisibleAuthForm: boolean,
}