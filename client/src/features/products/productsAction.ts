import axios from 'axios';
import { AppDispatch } from '../../store';
import { ApiRoutes } from '../../constants';
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFail
} from './productsSlice';

export const getProducts = async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchProductsRequest());

    const { data } = await axios.get(ApiRoutes.PRODUCTS);
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFail(`${(error as Error).message}: Failed to fetch products`));
  }
}
