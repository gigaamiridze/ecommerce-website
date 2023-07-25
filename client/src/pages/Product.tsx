import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { PageRoutes } from '../constants';
import { BackButton, ProductDetails, ProductImage } from '../components';

function Product() {
  const { productId } = useParams();
  const product = products.find(product => product.id === productId);

  return (
    <>
      <Link to={PageRoutes.ROOT}>
        <BackButton>Go Back</BackButton>
      </Link>
      {product && (
        <ProductDetails>
          <ProductImage
            src={product.image}
            alt={`${product.brand}'s Product`}
          />
        </ProductDetails>
      )}
    </>
  )
}

export default Product;
