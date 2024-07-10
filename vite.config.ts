import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "@svgr/rollup"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Add the SVGR plugin here
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    svgr(),
  ],
})
