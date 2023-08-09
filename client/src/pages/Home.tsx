import { useEffect } from 'react';
import axios from 'axios';
import { ApiRoutes } from '../constants';
import { ProductItem, Loader, Alert } from '../layouts';
import { useAppSelector, useAppDispatch } from '../store';
import { HomeContainer, HomeTitle, ProductsList } from '../components';
import { selectProductsState, getProductsRequest, getProductsSuccess, getProductsFail } from '../features';

function Home() {
  const { products, isLoading, error } = useAppSelector(selectProductsState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsRequest());
    axios
      .get(ApiRoutes.PRODUCTS)
      .then((response) => {
        dispatch(getProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getProductsFail(`${error.message}: Failed to fetch products`));
      })
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
