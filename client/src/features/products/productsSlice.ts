import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductsState, IProduct } from '../../interfaces';
import { RootState } from '../../store';

const initialState: IProductsState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getProductsSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getProductsFail: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectProductsState = (state: RootState) => state.products;

export const {
  getProductsRequest,
  getProductsSuccess,
  getProductsFail
} = productsSlice.actions;

export default productsSlice.reducer;
