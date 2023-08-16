import styled from 'styled-components';
import { mixins } from '../../assets';
import { PageContent } from '../shared';

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
  
  h2 {
    color: ${({ theme }) => theme.colors.davyGray};
  }
  
  h5:nth-child(4) {
    line-height: 1.5;
  }
  
  h2,
  div:nth-child(2),
  h5:nth-child(3) {
    ${mixins.horizontalGrayLine};
    padding-bottom: 12px;
  }
`;
