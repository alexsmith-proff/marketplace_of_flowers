import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../interfaces/users.interface"

const initialState: IUser = {
    profile: {},
    // Окно авторизации
    isVisibleAuthForm: false
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.profile = action.payload
        },
        setIsVisibleAuthForm: (state, action) => {
            state.isVisibleAuthForm = action.payload
        }
    }
})

// экспортируем экшен и редьюсер
export const { setUserData, setIsVisibleAuthForm } = userSlice.actions
export default userSlice.reducer