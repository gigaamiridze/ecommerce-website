import styled from 'styled-components';

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  gap: 30px;
`;

export const ProductItemContent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 3px;
  padding: 16px;
  
  #product-info {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    padding: 20px 0;
  }
`;
