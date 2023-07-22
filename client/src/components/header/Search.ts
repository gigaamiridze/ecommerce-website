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
