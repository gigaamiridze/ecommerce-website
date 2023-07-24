import { Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { IProductProps } from '../interfaces';
import { Rating } from '../layouts';
import { ProductItem, ProductImage, ProductName, ProductPrice } from '../components';

function Product({ product }: IProductProps) {
  const { id, name, image, brand, price, rating, numReviews } = product;

  return (
    <ProductItem>
      <Link to={`${PageRoutes.PRODUCT}/${id}`}>
        <ProductImage src={image} alt={`${brand}'s Product`} />
      </Link>
      <div id='product-info'>
        <Link to={`${PageRoutes.PRODUCT}/${id}`}>
          <ProductName>{name}</ProductName>
        </Link>
        <Rating rating={rating} numReviews={numReviews} />
        <ProductPrice>${price}</ProductPrice>
      </div>
    </ProductItem>
  )
}

export default Product;
