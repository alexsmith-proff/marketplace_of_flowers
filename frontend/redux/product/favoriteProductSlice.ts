import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../interfaces/products.interface"

type TinitialState = {
    products: IProduct[]
}

const initialState: TinitialState = {
    products: []
}

export const favoriteProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addFavoriteProduct: (state, action: PayloadAction<IProduct>) => {
            state.products.push(action.payload)
        },
        deleteFavoriteProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        }
    }
})

// экспортируем экшен и редьюсер
export const { addFavoriteProduct, deleteFavoriteProduct } = favoriteProductSlice.actions
export default favoriteProductSlice.reducer