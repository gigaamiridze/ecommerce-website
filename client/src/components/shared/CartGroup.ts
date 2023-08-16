import styled from 'styled-components';
import { mixins } from '../../assets';

const CartGroup = styled.div`
  height: fit-content;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.line};

  div {
    ${mixins.flexBetween};
    ${mixins.horizontalGrayLine};
    padding: 12px 20px;

    &:last-child {
      border-bottom: none;
    }
  }

  #total-block {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
  }
  
  h2 {
    color: ${({ theme }) => theme.colors.davyGray};
  }
`;

export default CartGroup;
