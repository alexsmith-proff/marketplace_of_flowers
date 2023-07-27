import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../interfaces/users.interface"

// type TProfile = {
//     id?: number,
//     name?: string,
//     email?: string,
//     password?: string,
//     role?: string,
//     createdAt?: Date,
//     updatedAt?: Date
// }

// type TUser = {
//     profile: TProfile
// }

const initialState: IUser = {
    profile: {},
    orders: []
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.profile = action.payload
        }
    }
})

// экспортируем экшен и редьюсер
export const { setUserData } = userSlice.actions
export default userSlice.reducer