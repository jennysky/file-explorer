import React from "react"
import { styled } from "styled-components"
import { ReactComponent as Folder } from "../../assets/folder.svg"
import { ReactComponent as File } from "../../assets/file.svg"
import { ExplorerDirectory, ExplorerFile } from "./FileExplorer"

const TreeFolderName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 6px 4px;
  cursor: pointer;
`

const TreeTextEllipsis = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TreeFileName = styled(TreeFolderName)`
  pointer-events: none;
  cursor: not-allowed;
`

const StyledFile = styled(File)`
  flex-shrink: 0;
`

const StyledFolder = styled(Folder)`
  flex-shrink: 0;
`

export const FileExplorerRow = ({
  item,
}: {
  item: ExplorerFile | ExplorerDirectory
}) => {
  const Container = item.type === "directory" ? TreeFolderName : TreeFileName
  return (
    <Container>
      {item.type === "directory" ? <StyledFolder /> : <StyledFile />}
      <TreeTextEllipsis>{item.name}</TreeTextEllipsis>
    </Container>
  )
}
