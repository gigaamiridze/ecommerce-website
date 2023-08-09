import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductDetailsState, IProduct } from '../../interfaces';
import { RootState } from '../../store';

const initialState: IProductDetailsState = {
  product: null,
  isLoading: false,
  error: null,
};

const productDetailsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchProductSuccess: (state, action: PayloadAction<IProduct>) => {
      state.product = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchProductFail: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectProductDetailsState = (state: RootState) => state.productDetails;

export const {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFail
} = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
