import styled from 'styled-components';

const Logo = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 17.5px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default Logo;
