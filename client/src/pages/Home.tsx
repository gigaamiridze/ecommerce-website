import { Product } from '../layouts';
import { HomeTitle, ProductsList } from '../components';

function Home() {
  return (
    <>
      <HomeTitle>latest products</HomeTitle>
      <ProductsList>
        <Product />
      </ProductsList>
    </>
  )
}

export default Home;
