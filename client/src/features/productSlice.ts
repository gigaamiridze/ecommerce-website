import { createSlice } from '@reduxjs/toolkit';
import { IProductState } from '../interfaces';

const initialState: IProductState = {
  products: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
