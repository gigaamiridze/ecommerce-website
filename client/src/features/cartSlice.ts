import { createSlice } from '@reduxjs/toolkit';
import { ICartState } from '../interfaces';

const initialState: ICartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
