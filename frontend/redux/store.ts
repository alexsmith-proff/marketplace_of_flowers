import { Action, configureStore, ThunkAction, } from '@reduxjs/toolkit'
import userSlice from './user/userSlice';
import cartProductSlice from './product/cartProductSlice';
import favoriteProductSlice from './product/favoriteProductSlice';
import viewedProductSlice from './product/viewedProductSlice';
  
  export const store = configureStore({
    reducer: {
        user: userSlice,
        cartProduct: cartProductSlice,
        favoriteProduct: favoriteProductSlice,
        viewedProduct: viewedProductSlice,
    },
  })
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
     ReturnType,
     RootState,
     unknown,
     Action<string>
   >