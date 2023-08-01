import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { PageRoutes } from '../constants';
import { BackButton, ProductDetails, ProductImage, ProductName } from '../components';

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
          <div>
            <ProductName isProductContent={true}>{product.name}</ProductName>
          </div>
        </ProductDetails>
      )}
    </>
  )
}

export default Product;
