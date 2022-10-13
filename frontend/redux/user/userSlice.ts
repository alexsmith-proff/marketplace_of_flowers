import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../interfaces/user"
import allEndPoints from '../../services/api/api'



type UserState = {
    user: IUser
}

const initialState: UserState = {
    user: {}
}

export const getUserData = createAsyncThunk('user/getUserData', async(_, { rejectWithValue, dispatch }) => {
    // Запрос
    try {
        const response = await allEndPoints.auth.getProfile({})
    // console.log(response);
    dispatch(setUserData(response.data.user))        
    } catch (error) {
        if (error.response.status === 403) {
            // console.log(error);
            dispatch(setUserData({role: ''}))
        }
    }
    
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        }
    },
    // extraReducers: {
    //     [getUserData.pending]: () => {}, // pending вызывается тогда, когда вызывается getPosts
    //     [getUserData.fulfilled]: () => {}, // fulfilled вызывается тогда, когда запрос прошел успешно
    //     [getUserData.rejected]: () => {}, // rejected вызывается тогда, когда есть ошибка                
    // }
})

// экспортируем экшен и редьюсер
export const { setUserData } = userSlice.actions
export default userSlice.reducer