import { styled } from "styled-components"
import { Spinner } from "./Spinner"

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainSpinner = () => {
  return (
    <StyledBackdrop>
      <Spinner size={50} />
    </StyledBackdrop>
  )
}
