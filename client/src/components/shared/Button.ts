import styled, { css } from 'styled-components';

const Button = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    transition: ${theme.transition};
  `}
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const DeleteButton = styled(Button)`
  width: 100%;
  height: 48px;
  background-color: transparent;
  font-size: 14px;
  padding: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brightGray}; 
  }
`;

export const BackButton = styled(Button)`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  padding-left: 24px;
  padding-right: 24px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.brightGray};
  }
`;

export const AddButton = styled(Button)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  `}
  width: 100%;
  white-space: nowrap;
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.line};
    cursor: not-allowed;
  }
`;
