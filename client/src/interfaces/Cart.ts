export interface ICartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  countInStock: string;
  quantity: string;
}

// This interface is for initial state of cart slice
export interface ICartState {
  cartItems: ICartItem[];
}
