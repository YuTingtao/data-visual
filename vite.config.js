import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

import vueSetupExtend from 'vite-plugin-vue-setup-extend';
// svg-icon
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// gzip压缩
import viteCompression from 'vite-plugin-compression';
// 打包分析
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 公共基础路径
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'https://xxx.com',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    vueSetupExtend(),
    viteCompression({
      threshold: 10240 // 大于10K的文件进行gzip压缩
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icon')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: 'svg__icon__dom'
    })
    // 打包分析
    // visualizer({
    //   open: true
    // })
  ],
  build: {
    outDir: 'docs', // 打包输出目录
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'assets/js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', // 资源文件像：字体、图片等
        manualChunks(id) {
          /* if (/node_modules\/(vue|vue-router|pinia|axios)/.test(id)) {
            return 'vue';
          } else  */ if (id.includes('node_modules/echarts')) {
            return 'echarts';
          } else if (id.includes('node_modules/element-plus')) {
            return 'element-plus';
          } else if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});
