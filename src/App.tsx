import React, { useState } from "react"
import { FileExplorer } from "./components/FileExplorer"
import { FileExplorerProvider } from "./contexts/FileExplorer/FileExplorerProvider"
import { Modal } from "./components/Modal"
import { styled } from "styled-components"

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 4px;
  color: black;
`

const StyledContainer = styled.button`
  margin: 20px;
`

function App() {
  const [open, setOpen] = useState(false)
  const onClick = () => {
    setOpen((state) => !state)
  }

  const onClose = () => {
    setOpen(false)
  }
  return (
    <StyledContainer>
      <FileExplorerProvider>
        <StyledButton onClick={onClick}>Open File Explorer</StyledButton>
        {open && (
          <Modal onClose={onClose}>
            <FileExplorer />
          </Modal>
        )}
      </FileExplorerProvider>
    </StyledContainer>
  )
}

export default App
