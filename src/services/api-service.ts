import type { ExplorerDirectory } from "../components/FileExplorer"
import { getFolderMockData, initData, waitFor } from "../utils/mock-util"

export const fetchRootDirectoryService = async () => {
  await waitFor(1000)
  return new Promise((resolve, reject) => {
    resolve(initData)
  })
}

export const fetchDirectoryService = async (
  id: string,
): Promise<ExplorerDirectory> => {
  await waitFor(1000)
  return new Promise((resolve, reject) => {
    resolve(getFolderMockData(id))
  })
}
