import { useEffect, ChangeEvent } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { PageRoutes } from '../constants';
import { useAppDispatch, useAppSelector } from '../store';
import { Alert, SelectQuantity, Heading } from '../layouts';
import { addItemToCart, selectCartState } from '../features';
import {
  CartContainer,
  LeftColumn,
  CartItem,
  ProductImage,
  DeleteButton,
  CartGroup
} from '../components';

function Cart() {
  const { productId } = useParams();
  const { cartItems } = useAppSelector(selectCartState);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const quantity = Number(queryParams.get('quantity'));

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);

  useEffect(() => {
    if (productId && quantity) {
      addItemToCart(productId, quantity, dispatch);
    }
  }, [dispatch, productId, quantity]);

  return (
    <CartContainer>
      <LeftColumn>
        <Heading title='shopping cart' type={1} />
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
                  <Heading title={item.name} type={4} />
                </Link>
                <Heading title={`$${item.price}`} type={5} />
                <SelectQuantity
                  countInStock={item.countInStock}
                  value={item.quantity}
                  setter={(event: ChangeEvent<HTMLSelectElement>) => (
                    addItemToCart(String(item.id), Number(event.target.value), dispatch)
                  )}
                />
                <DeleteButton>
                  <FaTrash />
                </DeleteButton>
              </CartItem>
            ))}
          </div>
        )}
      </LeftColumn>
      <CartGroup>
        <div id='total-block'>
          <Heading title={`Subtotal (${totalItems}) items`} type={2} />
          <Heading title={`$${totalPrice}`} type={5} />
        </div>
      </CartGroup>
    </CartContainer>
  )
}

export default Cart;
