import { configureStore } from '@reduxjs/toolkit';
import { productsReducer, productDetailsReducer, cartReducer } from '../features';

const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
