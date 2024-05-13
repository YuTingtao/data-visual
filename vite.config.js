import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// svg-icon
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// gzip压缩
import viteCompression from 'vite-plugin-compression'
// node require语法转化
import requireTransform from 'vite-plugin-require-transform'
// 打包分析
import { visualizer } from 'rollup-plugin-visualizer'

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
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/manager/, '')
      }
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    VueSetupExtend(),
    viteCompression({
      threshold: 10240, // 大于10K的文件进行gzip压缩
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icon')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: 'svg__icon__dom'
    }),
    requireTransform({
      fileRegex: /.js$|.vue$/,
    }),
    // 打包分析
    // visualizer({
    //   open: true
    // })
  ],
  build: {
    outDir: 'docs', // 打包输出目录
    chunkSizeWarningLimit: 1000,
  },
});
