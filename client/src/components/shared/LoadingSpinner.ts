import styled from 'styled-components';

const LoadingSpinner = styled.span`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border: 6px solid ${({ theme }) => theme.colors.primary};
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 0.8s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
`;

export default LoadingSpinner;
