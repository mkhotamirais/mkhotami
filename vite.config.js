import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api": "http://localhost:3000",
      // "/images": "http://localhost:3000",
      // "/api": "https://mkhotami-server.vercel.app",
      // "/images": "https://mkhotami-server.vercel.app",
      "/images": {
        target: "https://mkhotami-server.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/images/, ""),
      },
    },
  },
});
