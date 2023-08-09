import { useEffect } from 'react';
import axios from 'axios';
import { ApiRoutes } from '../constants';
import { ProductItem, Loader, Alert } from '../layouts';
import { useAppSelector, useAppDispatch } from '../store';
import { HomeContainer, HomeTitle, ProductsList } from '../components';
import {
  selectProductsState,
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFail
} from '../features';

function Home() {
  const { products, isLoading, error } = useAppSelector(selectProductsState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        dispatch(fetchProductsRequest());

        const { data } = await axios.get(ApiRoutes.PRODUCTS);
        dispatch(fetchProductsSuccess(data));
      } catch (error) {
        dispatch(fetchProductsFail(`${(error as Error).message}: Failed to fetch products`));
      }
    }

    getProducts();
  }, [dispatch]);

  return (
    <HomeContainer>
      <HomeTitle>latest products</HomeTitle>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Alert variant='danger'>{error}</Alert>
      ) : (
        <ProductsList>
          {products.map((product) => (
            <ProductItem
              key={product._id}
              product={product}
            />
          ))}
        </ProductsList>
      )}
    </HomeContainer>
  )
}

export default Home;
