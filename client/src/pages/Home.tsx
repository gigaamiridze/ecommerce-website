import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store';
import { selectProductsState, getProducts } from '../features';
import { ProductItem, Loader, Alert, Heading } from '../layouts';
import { HomeContainer, ProductsList } from '../components';

function Home() {
  const { products, isLoading, error } = useAppSelector(selectProductsState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <HomeContainer>
      <Heading title='latest products' type={1} />
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
