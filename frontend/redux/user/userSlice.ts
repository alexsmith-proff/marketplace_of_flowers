import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TProfile = {
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    role?: string,
    createdAt?: Date,
    updatedAt?: Date
}

type TUser = {
    profile: TProfile
}

const initialState: TUser = {
    profile: {}
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