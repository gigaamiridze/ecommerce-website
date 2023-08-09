import { configureStore } from '@reduxjs/toolkit';
import { productsReducer, productDetailsReducer } from '../features';

const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
