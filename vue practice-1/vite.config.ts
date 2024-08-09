import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';;
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 添加别名，简化模块引用
    },
  },  
})
