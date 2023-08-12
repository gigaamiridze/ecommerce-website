import { ICartItem } from '../interfaces';

export const getCartItemsFromStorage = (): ICartItem[] => {
  const cartItemsJson = localStorage.getItem('cart-items');

  if (cartItemsJson) {
    return JSON.parse(cartItemsJson);
  } else {
    return [];
  }
};

export const setCartItemsToStorage = (cartItems: ICartItem[]) => {
  localStorage.setItem('cart-items', JSON.stringify(cartItems));
};
