import React from "react"
import { useFileExplorer } from "../../contexts/FileExplorer/FileExplorerProvider"
import { styled } from "styled-components"
import { MainSpinner } from "../Spinner/MainSpinner"
import { Spinner } from "../Spinner"
import { FileExplorerRow } from "./FileExplorerRow"

export interface ExplorerFile {
  id: string
  name: string
  type: "file"
}

export interface ExplorerDirectory {
  id: string
  name: string

  type: "directory" | "root"
  children?: Array<ExplorerFile | ExplorerDirectory>
}

const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const TreeChildren = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 36px;
`

export const FileExplorer: React.FC = () => {
  const {
    openFolderById,
    toggleDirectory,
    root,
    fetchDirectory,
    folderChildrenById,
  } = useFileExplorer()

  const handleToggle = async (
    e: React.MouseEvent<HTMLDivElement>,
    dir: ExplorerDirectory,
  ) => {
    e.stopPropagation()
    toggleDirectory(dir.id)
    const children = folderChildrenById[dir.id]
    if (!children) {
      await fetchDirectory(dir.id)
    }
  }

  if (!root) {
    return <MainSpinner />
  }

  const renderDirectory = (dir: ExplorerDirectory) => {
    const children = folderChildrenById[dir.id]
    const isOpen = openFolderById[dir.id]
    return (
      <TreeContainer key={dir.id} onClick={(e) => handleToggle(e, dir)}>
        <FileExplorerRow item={dir} />
        {isOpen && (
          <>
            {!children ? <Spinner size={20} /> : <>{renderChildren({ children })}</>}
          </>
        )}
      </TreeContainer>
    )
  }

  const renderChildren = ({
    children,
  }: {
    children: Array<ExplorerFile | ExplorerDirectory> | undefined
  }) => {
    return (
      <TreeChildren>
        {children?.map((item: ExplorerDirectory | ExplorerFile) =>
          item.type === "directory" ? (
            renderDirectory(item as ExplorerDirectory)
          ) : (
            <FileExplorerRow item={item} key={item.id} />
          ),
        )}
      </TreeChildren>
    )
  }

  return <>{renderChildren({ children: root.children })}</>
}
