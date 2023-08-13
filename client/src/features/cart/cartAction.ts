import axios from 'axios';
import { ApiRoutes } from '../../constants';
import { store, AppDispatch } from '../../store';
import { setCartItemsToStorage } from '../../utils';
import { addItem, selectCartState } from './cartSlice';

export const addItemToCart = async (productId: string, quantity: number, dispatch: AppDispatch) => {
  const { data } = await axios.get(`${ApiRoutes.PRODUCTS}/${productId}`);

  const newItem = {
    id: data._id,
    name: data.name,
    brand: data.brand,
    price: data.price,
    image: data.image,
    countInStock: data.count_in_stock,
    quantity,
  };

  dispatch(addItem(newItem));

  const { cartItems } = selectCartState(store.getState());
  setCartItemsToStorage(cartItems);
}
