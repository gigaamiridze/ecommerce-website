import styled from 'styled-components';

export const H1Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

export const H2Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  line-height: 1.2;
`;

export const H3Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

export const H4Title = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 1px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const H5Title = styled.h5`
  color: ${({ theme }) => theme.colors.davyGray};
  font-size: 14px;
  letter-spacing: 1px;
`;
