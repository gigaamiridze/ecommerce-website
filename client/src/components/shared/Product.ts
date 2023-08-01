import styled, { css } from 'styled-components';
import { IProductLayout } from '../../interfaces';
import { mixins } from '../../assets';

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ProductName = styled.p<IProductLayout>`
  ${({ isProductContent, theme }) => css`
    color: ${isProductContent ? theme.colors.davyGray : theme.colors.primary};
    font-size: ${isProductContent ? 24 : 14}px;
    font-weight: ${isProductContent && 600};
    text-transform: ${isProductContent && 'uppercase'};
    letter-spacing: ${isProductContent ? 3 : 1}px;
    line-height: ${isProductContent ? 1.2 : 1.5};
    ${isProductContent && mixins.horizontalGrayLine};
  `}
`;
