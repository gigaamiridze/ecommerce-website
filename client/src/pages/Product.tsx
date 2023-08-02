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
  ProjectDescription,
  CartGroup,
  AddButton
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
          <CartGroup>
            <div>
              <span>Price:</span>
              <ProductPrice isProductContent={true}>${product.price}</ProductPrice>
            </div>
            <div>
              <span>Status:</span>
              <span>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
            </div>
            <div>
              <AddButton>Add to Cart</AddButton>
            </div>
          </CartGroup>
        </ProductDetails>
      )}
    </>
  )
}

export default Product;
