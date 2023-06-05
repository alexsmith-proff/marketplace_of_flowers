import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../interfaces/products.interface"

type TinitialState = {
    products: IProduct[]
}

const initialState: TinitialState = {
    products: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.products.push(action.payload)
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        }
    }
})

// экспортируем экшен и редьюсер
export const { addProduct, deleteProduct } = productSlice.actions
export default productSlice.reducer