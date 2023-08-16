import styled from 'styled-components';
import { mixins } from '../../assets';

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 90px 25% 1fr 22% 1fr;
  align-items: center;
  grid-column-gap: 30px;
  padding: 12px 20px;
  ${mixins.horizontalGrayLine};
  
  &:last-child {
    border-bottom: none;
  }

  select {
    width: 100%;
  }
`;

export default CartItem;
