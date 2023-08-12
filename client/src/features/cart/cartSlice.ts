import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartState, ICartItem } from '../../interfaces';
import { getCartItemsFromStorage } from '../../utils';
import { RootState } from '../../store';

const initialState: ICartState = {
  cartItems: getCartItemsFromStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item => item.id === existingItem.id ? newItem : item),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        }
      }
    },
  },
});

export const selectCartState = (state: RootState) => state.cart;

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
