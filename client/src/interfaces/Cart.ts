export interface ICartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  countInStock: number;
  quantity: number;
}

// This interface is for initial state of cart slice
export interface ICartState {
  cartItems: ICartItem[];
}
