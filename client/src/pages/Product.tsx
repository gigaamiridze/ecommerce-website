import { useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();

  return (
    <div>Product ID: {productId}</div>
  )
}

export default Product;
