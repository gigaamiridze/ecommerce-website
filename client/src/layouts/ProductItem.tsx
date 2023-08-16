import { Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { IProductProps } from '../interfaces';
import { Rating, Heading } from '../layouts';
import { ProductItemContent, ProductImage } from '../components';

function ProductItem({ product }: IProductProps) {
  const { _id, name, image, brand, price, rating, num_reviews } = product;

  return (
    <ProductItemContent>
      <Link to={`${PageRoutes.PRODUCT}/${_id}`}>
        <ProductImage src={image} alt={`${brand}'s Product`} />
      </Link>
      <div id='product-info'>
        <Link to={`${PageRoutes.PRODUCT}/${_id}`}>
          <Heading title={name} type={4} />
        </Link>
        <Rating rating={rating} numReviews={num_reviews} />
        <Heading title={`$${price}`} type={2} />
      </div>
    </ProductItemContent>
  )
}

export default ProductItem;
