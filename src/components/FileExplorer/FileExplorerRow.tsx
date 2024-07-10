import React, { ReactNode } from "react"
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
  width: 100%;
  cursor: pointer;
`

const TreeText = styled.div`
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
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

export const FileExplorerRow = ({
  item,
}: {
  item: ExplorerFile | ExplorerDirectory
}) => {
  const Container = item.type === "directory" ? TreeFolderName : TreeFileName
  return (
    <Container>
      {item.type === "directory" ? <Folder /> : <File />}
      <TreeText>
        <TreeTextEllipsis> {item.name}</TreeTextEllipsis>
      </TreeText>
    </Container>
  )
}
