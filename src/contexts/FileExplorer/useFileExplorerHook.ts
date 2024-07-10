import  {
    useContext,
  } from "react"
import { FileExplorerContext } from "./FileExplorerProvider"


export const useFileExplorer = () => {
    const context = useContext(FileExplorerContext)
    if (context === undefined) {
      throw new Error("useFileExplorer must be used within a FileExplorerProvider")
    }
    return context
  }
  