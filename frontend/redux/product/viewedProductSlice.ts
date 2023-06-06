import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../interfaces/products.interface"

type TinitialState = {
    products: IProduct[]
}

const initialState: TinitialState = {
    products: []
}

export const viewedProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addViewedProduct: (state, action: PayloadAction<IProduct>) => {
            state.products.push(action.payload)
        },
        deleteViewedProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        }
    }
})

// экспортируем экшен и редьюсер
export const { addViewedProduct, deleteViewedProduct } = viewedProductSlice.actions
export default viewedProductSlice.reducer