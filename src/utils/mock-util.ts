import type { ExplorerDirectory, ExplorerFile } from "../components/FileExplorer"
import { v4 as uuidv4 } from "uuid"

export const waitFor = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

function createFile(id: number): ExplorerFile {
  return {
    id: `file-${id}`,
    name: `File-${id}.txt`,
    type: "file",
  }
}

function createDirectory(
  id: number,
  children: Array<ExplorerFile | ExplorerDirectory>,
): ExplorerDirectory {
  return {
    id: `dir-${id}`,
    name: `Folder-${id}`,
    type: "directory",
    children,
  }
}
const getId = () => {
  return uuidv4()
}

export function getRandomFolderData(
  depth: number = 0,
  maxDepth: number = 3,
  maxChildren: number = 5,
  id?: string | null,
): ExplorerDirectory {
  const children: Array<ExplorerFile | ExplorerDirectory> = []
  if (depth < maxDepth) {
    for (let i = 0; i < Math.floor(Math.random() * maxChildren) + 1; i++) {
      const isFile = Math.random() > 0.5
      if (isFile) {
        children.push(createFile(getId()))
      } else {
        children.push(getRandomFolderData(depth + 1, maxDepth, maxChildren, null))
      }
    }
  }
  return createDirectory(id || getId(), children)
}

export const getFolderMockData = (id: string): ExplorerDirectory => {
  const data = getRandomFolderData(0, 5, 10, id)
  const folder = {
    ...data,
    children: data?.children?.map((item: ExplorerDirectory | ExplorerFile) => {
      if (item.type === "directory") {
        item.children = undefined
        return item
      } else {
        return item
      }
    }),
  }
  console.log("getFolderMockData", folder)
  return folder
}

export const initData: ExplorerDirectory = {
  id: "root",
  name: "root",
  type: "directory",
  children: [
    {
      id: "dir-1edd1f44-dd81-4978-8d00-ef34e920dc7b",
      name: "Folder-1edd1f44-dd81-4978-8d00-ef34e920dc7b",
      type: "directory",
    },
    {
      id: "dir-d1e30730-2717-4cf4-bd3f-c1cbe13c015b",
      name: "Folderd-1e30730-2717-4cf4-bd3f-c1cbe13c015b",
      type: "directory",
    },
    {
      id: "dir-134b6b1b-814c-4bd9-a34b-a406ebedbf3f",
      name: "Folder-134b6b1b-814c-4bd9-a34b-a406ebedbf3f",
      type: "directory",
    },
    {
      id: "file-2ad64152-0b44-40f7-afdc-48e4d5e81c3e",
      name: "File-2ad64152-0b44-40f7-afdc-48e4d5e81c3e.txt",
      type: "file",
    },
  ],
}
