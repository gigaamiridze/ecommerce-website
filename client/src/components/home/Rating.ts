import styled from 'styled-components';

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 30px;
`;

export const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 18px;
  }
`;

export const ReviewsText = styled.p`
  color: ${({ theme }) => theme.colors.davyGray};
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 1px;
`;
