import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react"
import {
  type ExplorerDirectory,
  type ExplorerFile,
} from "../../components/FileExplorer"
import {
  fetchRootDirectoryService,
  fetchDirectoryService,
} from "../../services/api-service"

interface FileExplorerContextType {
  root: ExplorerDirectory | undefined
  openFolderById: Record<string, boolean>
  toggleDirectory: (id: string) => void
  folderChildrenById: Record<
    string,
    Array<ExplorerFile | ExplorerDirectory> | undefined
  >
  fetchDirectory: (id: string) => void
}

const FileExplorerContext = createContext<FileExplorerContextType | undefined>(
  undefined,
)

export const FileExplorerProvider: React.FC<{
  children: ReactNode
}> = ({ children }) => {
  const [root, setRoot] = useState<ExplorerDirectory | undefined>(undefined)

  useEffect(() => {
    fetchRootDirectoryService().then((data) => {
      setRoot(data)
    })
  }, [])

  const [openFolderById, setOpenFolderById] = useState<Record<string, boolean>>({})
  const [folderChildrenById, setFolderChildrenById] = useState<
    Record<string, Array<ExplorerFile | ExplorerDirectory> | undefined>
  >({})

  const toggleDirectory = (id: string) => {
    setOpenFolderById((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const fetchDirectory = async (id: string) => {
    const children = folderChildrenById[id]
    if (children !== undefined) {
      return
    }
    const newFolder = await fetchDirectoryService(id)
    setFolderChildrenById((prev) => ({
      ...prev,
      [id]: newFolder.children,
    }))
  }

  return (
    <FileExplorerContext.Provider
      value={{
        root,
        openFolderById,
        toggleDirectory,
        fetchDirectory,
        folderChildrenById,
      }}
    >
      {children}
    </FileExplorerContext.Provider>
  )
}

export const useFileExplorer = () => {
  const context = useContext(FileExplorerContext)
  if (context === undefined) {
    throw new Error("useFileExplorer must be used within a FileExplorerProvider")
  }
  return context
}
