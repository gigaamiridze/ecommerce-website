import { Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { IProductProps } from '../interfaces';
import { ProductItem, ProductImage, ProductName, ProductPrice } from '../components';

function Product({ product }: IProductProps) {
  const { id, name, image, brand, price } = product;

  return (
    <ProductItem>
      <Link to={`${PageRoutes.PRODUCT}/${id}`}>
        <ProductImage src={image} alt={`${brand}'s Product`} />
      </Link>
      <div>
        <Link to={`${PageRoutes.PRODUCT}/${id}`}>
          <ProductName>{name}</ProductName>
        </Link>
        <ProductPrice>${price}</ProductPrice>
      </div>
    </ProductItem>
  )
}

export default Product;
