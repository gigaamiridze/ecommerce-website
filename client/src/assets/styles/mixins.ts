import { css } from 'styled-components';

export const mixins = {
  horizontalGrayLine: css`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  `,

  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  flexBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  overflowEllipsis: css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
}
