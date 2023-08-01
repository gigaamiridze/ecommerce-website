import styled from 'styled-components';

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

export const ProductItemContent = styled.div`
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: 3px;
  padding: 16px;
  
  #product-info {
    padding: 20px;
  }
`;

export const ProductPrice = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 3px;
`;
