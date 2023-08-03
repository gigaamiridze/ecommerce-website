import { useState, useEffect } from 'react';
import axios from 'axios';
import { IProduct } from '../interfaces';
import { ApiRoutes } from '../constants';
import { ProductItem } from '../layouts';
import { HomeTitle, ProductsList } from '../components';

function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const { data } = await axios.get(ApiRoutes.PRODUCTS);
    setProducts(data);
  }

  return (
    <>
      <HomeTitle>latest products</HomeTitle>
      <ProductsList>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </ProductsList>
    </>
  )
}

export default Home;
