import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Rating } from '../layouts';
import { IProduct } from '../interfaces';
import { PageRoutes, ApiRoutes } from '../constants';
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
  const [product, setProduct] = useState<IProduct | null>(null);
  const isInStock = (product?.countInStock ?? 0) > 0;

  useEffect(() => {
    getProduct();
  }, [productId]);

  const getProduct = async () => {
    const { data } = await axios.get(`${ApiRoutes.PRODUCTS}/${productId}`);
    setProduct(data);
  }

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
              <span>{isInStock ? 'In Stock' : 'Out of Stock'}</span>
            </div>
            <div>
              <AddButton disabled={!isInStock}>Add to Cart</AddButton>
            </div>
          </CartGroup>
        </ProductDetails>
      )}
    </>
  )
}

export default Product;
