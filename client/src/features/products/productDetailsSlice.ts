import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductDetailsState, IProduct } from '../../interfaces';
import { RootState } from '../../store';

const initialState: IProductDetailsState = {
  products: null,
  isLoading: false,
  error: null,
};

const productDetailsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getProductSuccess: (state, action: PayloadAction<IProduct>) => {
      state.products = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getProductFail: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectProductState = (state: RootState) => state.productDetails;

export const {
  getProductRequest,
  getProductSuccess,
  getProductFail
} = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
