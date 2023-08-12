import axios from 'axios';
import { AppDispatch } from '../../store';
import { ApiRoutes } from '../../constants';
import {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFail
} from './productDetailsSlice';

export const getProductDetails = async (productId: string | undefined, dispatch: AppDispatch) => {
  try {
    dispatch(fetchProductRequest());

    const { data } = await axios.get(`${ApiRoutes.PRODUCTS}/${productId}`);
    dispatch(fetchProductSuccess(data));
  } catch (error) {
    dispatch(fetchProductFail(`${(error as Error).message}: Failed to fetch product details`));
  }
}
