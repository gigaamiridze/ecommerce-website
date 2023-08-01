import { products } from '../data';
import { ProductItem } from '../layouts';
import { HomeTitle, ProductsList } from '../components';

function Home() {
  return (
    <>
      <HomeTitle>latest products</HomeTitle>
      <ProductsList>
        {products.slice(0, 4).map((product) => (
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
