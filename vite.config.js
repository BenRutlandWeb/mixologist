import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import components from "unplugin-vue-components/vite";
import content from "@originjs/vite-plugin-content";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({
      /* options */
    }),
    content(),
  ],
});
