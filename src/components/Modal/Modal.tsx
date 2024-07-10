import React, { ReactNode } from "react"
import styled from "styled-components"
import { ReactComponent as Close } from "../../assets/close.svg"

const StyledOverlay = styled.div`
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

const StyledContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-height: 80%;
  min-height: 300px;
  min-width: 70%;
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
`

const StyledBody = styled.div`
  overflow: auto;
`

const StyledCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 4px;
  color: black;
  width: 20px;
  height: 20px;
  margin-left: auto;
`

interface ModalProps {
  children: ReactNode
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <StyledOverlay className="modal-overlay">
      <StyledContent className="modal-content">
        <StyledCloseButton onClick={onClose}>
          <Close />
        </StyledCloseButton>
        <StyledBody>{children}</StyledBody>
      </StyledContent>
    </StyledOverlay>
  )
}
