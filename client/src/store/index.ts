import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../features';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
