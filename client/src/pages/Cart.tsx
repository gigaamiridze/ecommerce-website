import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { addItemToCart } from '../features';

function Cart() {
  const { productId } = useParams();
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
    <div>Cart</div>
  )
}

export default Cart;
