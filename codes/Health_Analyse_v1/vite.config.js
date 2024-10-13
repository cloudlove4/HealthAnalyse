import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/hdfs': {
        target: 'http://192.168.182.132:9870', // WebHDFS 服务器地址
        changeOrigin: true, 
        rewrite: path => path.replace(/^\/hdfs/, '/webhdfs/v1'), // 重写路径
      },
    },
  },  
})

