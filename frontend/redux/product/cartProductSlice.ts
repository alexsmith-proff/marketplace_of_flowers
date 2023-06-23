import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProductCart, IProductCount } from "../../interfaces/products.interface"

type TinitialState = {
    products: IProductCart[]
}

const initialState: TinitialState = {
    products: []
}

export const cartProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addCartProduct: (state, action: PayloadAction<IProductCart>) => {
            state.products.push(action.payload)
        },
        updateCountCartProduct: (state, action: PayloadAction<IProductCount>) => {
            state.products.find(product => product.id == action.payload.id).count = action.payload.count
        },
        deleteCartProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        }
    }
})

// экспортируем экшен и редьюсер
export const { addCartProduct, updateCountCartProduct, deleteCartProduct } = cartProductSlice.actions
export default cartProductSlice.reducer