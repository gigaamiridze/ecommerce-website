import styled, { css } from 'styled-components';
import { IAlertVariant } from '../../interfaces';

const variantStyles = {
  primary: css`
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
  `,
  secondary: css`
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
  `,
  success: css`
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  `,
  danger: css`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  `,
  warning: css`
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  `,
  info: css`
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  `,
  light: css`
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;
  `,
  dark: css`
    color: #1b1e21;
    background-color: #d6d8d9;
    border-color: #c6c8ca;
  `,
}

const AlertContainer = styled.div<IAlertVariant>`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid transparent;
  border-radius: 3px;
  ${({ variant }) => variantStyles[variant]}
  font-size: 16px;
  line-height: 1.3;
`;

export default AlertContainer;
