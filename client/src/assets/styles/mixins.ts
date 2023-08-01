import { css } from 'styled-components';

export const mixins = {
  horizontalGrayLine: css`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.brightGray};    
  `,
}
