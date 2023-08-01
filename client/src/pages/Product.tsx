import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { Rating } from '../layouts';
import { PageRoutes } from '../constants';
import {
  BackButton,
  ProductDetails,
  ProductImage,
  ProductInfoWrapper,
  ProductName,
  ProductPrice,
  ProjectDescription
} from '../components';

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
          <ProductInfoWrapper>
            <ProductName isProductContent={true}>{product.name}</ProductName>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <ProductPrice isProductContent={true}>Price: ${product.price}</ProductPrice>
            <ProjectDescription>{product.description}</ProjectDescription>
          </ProductInfoWrapper>
        </ProductDetails>
      )}
    </>
  )
}

export default Product;
