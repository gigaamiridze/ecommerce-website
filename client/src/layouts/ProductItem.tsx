import { Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { IProductProps } from '../interfaces';
import { Rating } from '../layouts';
import { ProductItemContent, ProductImage, ProductName, ProductPrice } from '../components';

function ProductItem({ product }: IProductProps) {
  const { _id, name, image, brand, price, rating, num_reviews } = product;

  return (
    <ProductItemContent>
      <Link to={`${PageRoutes.PRODUCT}/${_id}`}>
        <ProductImage src={image} alt={`${brand}'s Product`} />
      </Link>
      <div id='product-info'>
        <Link to={`${PageRoutes.PRODUCT}/${_id}`}>
          <ProductName isProductContent={false}>{name}</ProductName>
        </Link>
        <Rating rating={rating} numReviews={num_reviews} />
        <ProductPrice isProductContent={false}>${price}</ProductPrice>
      </div>
    </ProductItemContent>
  )
}

export default ProductItem;
