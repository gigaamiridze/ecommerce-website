import axios from 'axios';
import { AppDispatch } from '../../store';
import { ApiRoutes } from '../../constants';
import { addItem } from './cartSlice';

export const addItemToCart = async (productId: string, quantity: number, dispatch: AppDispatch) => {
  const { data } = await axios.get(`${ApiRoutes.PRODUCTS}/${productId}`);

  const newItem = {
    id: data.id,
    name: data.name,
    price: data.price,
    image: data.image,
    countInStock: data.count_in_stock,
    quantity,
  };

  dispatch(addItem(newItem));
}
