import styled from 'styled-components';

export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 40px;
`;

export const ProductItemContent = styled.div`
  width: 255px;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: 3px;
  padding: 16px;
  
  #product-info {
    padding: 20px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ProductName = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.5;
`;

export const ProductPrice = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 3px;
`;
