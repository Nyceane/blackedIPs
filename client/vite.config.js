import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/*
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
   server: {
    proxy: {
      "/v1": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

production
*/

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
   server: {
    proxy: {
      "/v1": {
        target: "https://server-blackedips.bunnyenv.com/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});