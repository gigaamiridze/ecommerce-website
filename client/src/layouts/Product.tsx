import { Link } from 'react-router-dom';
import ProductImg from '../assets/images/airpods.jpg';
import { PageRoutes } from '../constants';
import { ProductItem, ProductImage, ProductName, ProductPrice } from '../components';

function Product() {
  return (
    <ProductItem>
      <Link to={`${PageRoutes.PRODUCT}/1`}>
        <ProductImage src={ProductImg} alt='product' />
      </Link>
      <div>
        <Link to={`${PageRoutes.PRODUCT}/1`}>
          <ProductName>Airpods Wireless Bluetooth Headphones</ProductName>
        </Link>
        <ProductPrice>$89.99</ProductPrice>
      </div>
    </ProductItem>
  )
}

export default Product;
