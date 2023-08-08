import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../features';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
