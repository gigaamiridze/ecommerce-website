import styled from 'styled-components';
import { mixins } from '../../assets';
import { PageContent, ProductName, ProductPrice, RatingContainer } from '../shared';

export const ProductContainer = styled(PageContent)`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const ProductDetails = styled.div`
  display: grid;
  grid-template-columns: 45% 25% 1fr;
  grid-column-gap: 30px;
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
