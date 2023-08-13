import { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Alert } from '../layouts';
import { PageRoutes } from '../constants';
import { useAppDispatch, useAppSelector } from '../store';
import { addItemToCart, selectCartState } from '../features';
import { CartContainer, HeadTitle, LeftColumn } from '../components';

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
          <div></div> // Render carts here
        )}
      </LeftColumn>
    </CartContainer>
  )
}

export default Cart;
