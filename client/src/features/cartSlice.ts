import { createSlice } from '@reduxjs/toolkit';
import { ICartState } from '../interfaces';
import { RootState } from '../store';

const initialState: ICartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const selectCartState = (state: RootState) => state.cart;

export default cartSlice.reducer;
