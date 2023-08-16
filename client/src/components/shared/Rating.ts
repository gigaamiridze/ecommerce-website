import styled from 'styled-components';
import { mixins } from '../../assets';

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  
  h5 {
    line-height: 1.5;
  }
`;

export const StarsWrapper = styled.div`
  ${mixins.flexBetween};
  
  svg {
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 18px;
  }
`;
