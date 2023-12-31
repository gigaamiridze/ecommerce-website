import styled, { css } from 'styled-components';
import { mixins } from '../../assets';

export const LeftContent = styled.div`
  ${mixins.flexBetween};
  column-gap: 80px;
`;

export const RightContent = styled.div`
  ${mixins.flexBetween};
  column-gap: 10px;

  a {
    ${({ theme }) => css`
      color: ${theme.colors.gray};
      transition: ${theme.transition};
    `}
    ${mixins.flexBetween};
    column-gap: 8px;
    padding: 8px;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }

    span {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }
`;
