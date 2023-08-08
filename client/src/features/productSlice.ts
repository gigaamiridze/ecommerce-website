import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductState, IProduct } from '../interfaces';

const initialState: IProductState = {
  products: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    getProductsFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFail
} = productSlice.actions;

export default productSlice.reducer;
