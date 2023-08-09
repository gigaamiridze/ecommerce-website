import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Rating, Loader, Alert } from '../layouts';
import { PageRoutes, ApiRoutes } from '../constants';
import { useAppSelector, useAppDispatch } from '../store'
import {
  selectProductDetailsState,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFail
} from '../features';
import {
  ProductContainer,
  BackButton,
  ProductDetails,
  ProductImage,
  ProductInfoWrapper,
  ProductName,
  ProductPrice,
  ProjectDescription,
  CartGroup,
  AddButton,
} from '../components';

function Product() {
  const { productId } = useParams();
  const { product, isLoading, error } = useAppSelector(selectProductDetailsState);
  const dispatch = useAppDispatch();
  const isInStock = (product?.count_in_stock ?? 0) > 0;

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        dispatch(fetchProductRequest());

        const { data } = await axios.get(`${ApiRoutes.PRODUCTS}/${productId}`);
        dispatch(fetchProductSuccess(data));
      } catch (error) {
        dispatch(fetchProductFail(`${(error as Error).message}: Failed to fetch product details`));
      }
    }

    getProductDetails();
  }, [productId]);

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
            <ProductName isProductContent={true}>{product?.name}</ProductName>
            <Rating rating={product?.rating} numReviews={product?.num_reviews} />
            <ProductPrice isProductContent={true}>Price: ${product?.price}</ProductPrice>
            <ProjectDescription>{product?.description}</ProjectDescription>
          </ProductInfoWrapper>
          <CartGroup>
            <div>
              <span>Price:</span>
              <ProductPrice isProductContent={true}>${product?.price}</ProductPrice>
            </div>
            <div>
              <span>Status:</span>
              <span>{isInStock ? 'In Stock' : 'Out of Stock'}</span>
            </div>
            <div>
              <AddButton disabled={!isInStock}>Add to Cart</AddButton>
            </div>
          </CartGroup>
        </ProductDetails>
      )}
    </ProductContainer>
  )
}

export default Product;
