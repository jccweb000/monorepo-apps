import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true, // 打开浏览器
    hmr: true, // 开启热更新
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
