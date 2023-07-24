import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
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