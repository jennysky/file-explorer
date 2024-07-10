import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { FileExplorerProvider } from "./contexts/FileExplorer/FileExplorerProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FileExplorerProvider>
      <App />
    </FileExplorerProvider>
  </React.StrictMode>
)
