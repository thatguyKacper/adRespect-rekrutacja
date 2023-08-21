import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  build: {outDir: '../dist'},
  plugins: [],
  server: {
    host: true,
    port: 3000,
  },
});