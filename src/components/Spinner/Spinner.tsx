import { styled } from "styled-components"

const StyledSpinner = styled.div<{ $size: number }>`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #4e77d7;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Spinner = ({ size = 20 }: { size: number }) => {
  return <StyledSpinner $size={size} />
}
