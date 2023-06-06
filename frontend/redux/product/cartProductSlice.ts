import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../interfaces/products.interface"

type TinitialState = {
    products: IProduct[]
}

const initialState: TinitialState = {
    products: []
}

export const cartProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addCartProduct: (state, action: PayloadAction<IProduct>) => {
            state.products.push(action.payload)
        },
        deleteCartProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        }
    }
})

// экспортируем экшен и редьюсер
export const { addCartProduct, deleteCartProduct } = cartProductSlice.actions
export default cartProductSlice.reducer