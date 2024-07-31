import { defineConfig } from "vite";
import { resolve } from "path";
import typescript2 from 'rollup-plugin-typescript2';
import dts from "vite-plugin-dts";
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    }),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: [
        "src/**/*.ts",
        "src/**/*.tsx",
        "src/**/*.vue",
      ],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"]
    })
  ],
  build: {
    lib: {
      entry: "src/libs.ts",
      name: 'share-package',
      formats: ["es", "cjs", "umd"],
      fileName: format => `share-package.${format}.js`
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/libs.ts")
      },
      external: ['vue'],
      output: {
        exports: "named",
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
