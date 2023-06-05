import { Action, configureStore, ThunkAction, } from '@reduxjs/toolkit'
import userSlice from './user/userSlice';
import productSlice from './product/productSlice';
  
  export const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
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