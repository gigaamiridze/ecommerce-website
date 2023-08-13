import { useEffect } from 'react';
import { ProductItem, Loader, Alert } from '../layouts';
import { useAppSelector, useAppDispatch } from '../store';
import { selectProductsState, getProducts } from '../features';
import { HomeContainer, HeadTitle, ProductsList } from '../components';

function Home() {
  const { products, isLoading, error } = useAppSelector(selectProductsState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <HomeContainer>
      <HeadTitle>latest products</HeadTitle>
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
