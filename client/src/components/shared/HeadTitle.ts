import styled from 'styled-components';

const HeadTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

export default HeadTitle;
