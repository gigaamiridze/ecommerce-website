import styled, { css } from 'styled-components';

const QuantitySelect = styled.select`
  ${({theme}) => css`
    color: ${theme.colors.davyGray};
    background-color: ${theme.colors.cultured};
    font-family: ${theme.fonts.primary};
    transition: ${theme.transition};
  `}
  height: 45px;
  width: 80px;
  font-size: 14px;
  padding-left: 15px;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('/svg/down-arrow.svg');
  background-position: right 15px top 50%;
  background-repeat: no-repeat;
  background-size: 15px;
  
  &:hover {
    border-color: ${({theme}) => theme.colors.brightGray};
  }
`;

export default QuantitySelect;
