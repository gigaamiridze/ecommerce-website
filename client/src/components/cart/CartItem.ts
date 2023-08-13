import styled from 'styled-components';
import { mixins } from '../../assets';

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 90px 25% 1fr 1fr 1fr;
  grid-column-gap: 30px;
  padding: 12px 20px;
  ${mixins.horizontalGrayLine};
  
  &:last-child {
    border-bottom: none;
  }
`;

export default CartItem;
