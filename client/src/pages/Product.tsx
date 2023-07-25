import { useParams, Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { BackButton } from '../components';


function Product() {
  const { productId } = useParams();

  return (
    <>
      <Link to={PageRoutes.ROOT}>
        <BackButton>Go Back</BackButton>
      </Link>
    </>
  )
}

export default Product;
