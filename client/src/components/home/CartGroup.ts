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

    span {
      color: ${({ theme }) => theme.colors.davyGray};
      font-size: 14px;
      letter-spacing: 1px;
    }
  }
`;

export default CartGroup;
