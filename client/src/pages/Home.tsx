import { useEffect } from 'react';
import axios from 'axios';
import { ApiRoutes } from '../constants';
import { ProductItem, Loader } from '../layouts';
import { HomeTitle, ProductsList } from '../components';
import { useAppSelector, useAppDispatch } from '../store';
import { selectProductState, getProductsStart, getProductsSuccess, getProductsFail } from '../features';

function Home() {
  const { products, isLoading } = useAppSelector(selectProductState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsStart());
    axios
      .get(ApiRoutes.PRODUCTS)
      .then((response) => {
        dispatch(getProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getProductsFail());
        console.error('Error fetching products:', error);
      })
  }, [dispatch]);

  return (
    <>
      <HomeTitle>latest products</HomeTitle>
      {isLoading ? (
        <Loader />
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
    </>
  )
}

export default Home;
