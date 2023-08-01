import styled from 'styled-components';
import { mixins } from '../../assets';
import { ProductName, ProductPrice, RatingContainer } from '../shared';

export const ProductDetails = styled.div`
  display: grid;
  grid-template-columns: 45% 25% 25%;
  grid-column-gap: 30px;
  margin-top: 16px;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 12px;
  
  ${ProductName}, ${ProductPrice}, ${RatingContainer} {
    ${mixins.horizontalGrayLine};
    padding-bottom: 12px;
  }
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.davyGray};
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.5;
`;
