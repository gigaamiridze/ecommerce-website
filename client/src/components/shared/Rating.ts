import styled from 'styled-components';
import { mixins } from '../../assets';

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const StarsWrapper = styled.div`
  ${mixins.flexBetween};
  
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
