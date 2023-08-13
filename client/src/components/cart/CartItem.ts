import styled from 'styled-components';
import { mixins } from '../../assets';

const CartItem = styled.div`
  padding: 12px 20px;
  ${mixins.horizontalGrayLine};
  
  &:last-child {
    border-bottom: none;
  }
  
  img {
    max-width: 90px;
  }
`;

export default CartItem;
