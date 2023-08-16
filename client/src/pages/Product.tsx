import { useState, useEffect, ChangeEvent } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { useAppSelector, useAppDispatch } from '../store';
import { selectProductDetailsState, getProductDetails } from '../features';
import { Rating, Loader, Alert, SelectQuantity, Heading } from '../layouts';
import {
  ProductContainer,
  BackButton,
  ProductDetails,
  ProductImage,
  ProductInfoWrapper,
  CartGroup,
  BlackButton
} from '../components';

function Product() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<string>('1');
  const { product, isLoading, error } = useAppSelector(selectProductDetailsState);
  const dispatch = useAppDispatch();
  const isInStock = (product?.count_in_stock ?? 0) > 0;

  useEffect(() => {
    getProductDetails(productId, dispatch);
  }, [dispatch, productId]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(event.target.value);
  }

  const navigateToCartPage = () => {
    navigate(`${PageRoutes.CART}/${productId}?quantity=${quantity}`);
  }

  return (
    <ProductContainer>
      <Link to={PageRoutes.ROOT}>
        <BackButton>Go Back</BackButton>
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Alert variant='danger'>{error}</Alert>
      ) : (
        <ProductDetails>
          <ProductImage
            src={product?.image}
            alt={`${product?.brand}'s Product`}
          />
          <ProductInfoWrapper>
            <Heading title={product?.name} type={2} />
            <Rating rating={product?.rating} numReviews={product?.num_reviews} />
            <Heading title={`Price: $${product?.price}`} type={5} />
            <Heading title={product?.description} type={5} />
          </ProductInfoWrapper>
          <CartGroup>
            <div>
              <Heading title='Price:' type={5} />
              <Heading title={`$${product?.price}`} type={5} />
            </div>
            <div>
              <Heading title='Status:' type={5} />
              <Heading title={isInStock ? 'In Stock' : 'Out of Stock'} type={5} />
            </div>
            {isInStock && (
              <div>
                <Heading title='Quantity:' type={5} />
                <SelectQuantity
                  countInStock={product?.count_in_stock}
                  value={quantity}
                  setter={handleChange}
                />
              </div>
            )}
            <div>
              <BlackButton
                disabled={!isInStock}
                onClick={navigateToCartPage}
              >
                Add to Cart
              </BlackButton>
            </div>
          </CartGroup>
        </ProductDetails>
      )}
    </ProductContainer>
  )
}

export default Product;
