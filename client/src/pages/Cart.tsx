import { useEffect, ChangeEvent } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { Alert, SelectQuantity } from '../layouts';
import { useAppDispatch, useAppSelector } from '../store';
import { addItemToCart, selectCartState } from '../features';
import {
  CartContainer,
  HeadTitle,
  LeftColumn,
  CartItem,
  ProductImage,
  ProductName,
  ProductPrice
} from '../components';

function Cart() {
  const { productId } = useParams();
  const { cartItems } = useAppSelector(selectCartState);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const quantity = Number(queryParams.get('quantity'));

  useEffect(() => {
    if (productId && quantity) {
      addItemToCart(productId, quantity, dispatch);
    }
  }, [dispatch, productId, quantity]);

  return (
    <CartContainer>
      <LeftColumn>
        <HeadTitle>shopping cart</HeadTitle>
        {cartItems.length === 0 ? (
          <Alert variant='primary'>
            Your cart is empty <Link to={PageRoutes.ROOT}>Go Back</Link>
          </Alert>
        ) : (
          <div>
            {cartItems.map(item => (
              <CartItem key={item.id}>
                <ProductImage src={item.image} alt={`${item.brand}'s Product`} />
                <Link to={`${PageRoutes.PRODUCT}/${item.id}`}>
                  <ProductName isProductContent={false}>{item.name}</ProductName>
                </Link>
                <ProductPrice isProductContent={true}>${item.price}</ProductPrice>
                <SelectQuantity 
                  countInStock={item.countInStock}
                  value={item.quantity}
                  setter={(event: ChangeEvent<HTMLSelectElement>) => (
                    addItemToCart(String(item.id), Number(event.target.value), dispatch)
                  )}
                />
              </CartItem>
            ))}
          </div>
        )}
      </LeftColumn>
    </CartContainer>
  )
}

export default Cart;
