import styled, { css } from 'styled-components';

export const BackButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.primary};
    transition: ${theme.transition};
  `}
  background-color: transparent;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 15px 24px;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.brightGray};
  }
`;
