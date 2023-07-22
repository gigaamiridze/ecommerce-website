import styled, { css } from 'styled-components';

export const SearchForm = styled.form`
  height: 45px;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.davyGray};
    font-family: ${theme.fonts.primary};
  `}
  width: 205px;
  height: 100%;
  padding: 0 16px;
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.davyGray};
  }
`;

export const SearchButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.lightGreen};
    font-family: ${theme.fonts.primary};
    border: 2px solid ${theme.colors.lightGreen};
    transition: ${theme.transition};
  `}
  height: 100%;
  background-color: transparent;
  padding: 0 8px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  font-size: 12.5px;
  font-weight: 600;
  text-transform: uppercase;
  
  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.lightGreen};
      color: ${theme.colors.white};
    `}
  }
  
  &:focus {
    box-shadow: 0 0 0 3.3px ${({ theme }) => theme.colors.darkGreen};
  }
`;
