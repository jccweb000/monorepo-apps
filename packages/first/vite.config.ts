import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true, // 打开浏览器
    hmr: true, // 开启热更新
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
        entryFileNames: '[name].[hash].js',
        assetFileNames: ({ name }) => {
          if (name && /\.png|\.jpg|\.jpeg|\.gif|\.svg$/.test(name)) {
            return 'images/[name].[hash].[ext]';
          }
          return '[ext]/[name].[hash].[ext]';
        },
        chunkFileNames: 'js/[name].[hash].js',
      },
    },
  },
});
