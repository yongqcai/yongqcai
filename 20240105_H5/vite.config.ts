import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin';

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 要缓存的图标文件夹
      iconDirs: [resolve(__dirname, "src/assets/svgs")],
      // 执行 icon name 的格式
      symbolId: "icon-[name]",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  server: {
    port: 8080,
    host: "0.0.0.0",
    proxy: {
      "/wap": {
        // 匹配请求路径，
        target: "https://tiktok.liveshopvip.top", // 代理的目标地址
        // 开发模式，默认的127.0.0.1,开启后代理服务会把origin修改为目标地址
        changeOrigin: true,
        // secure: true, // 是否https接口
        // ws: true, // 是否代理websockets

        // 路径重写，**** 如果你的后端有统一前缀(如:/api)，就不开启；没有就开启
        //简单来说，就是是否改路径 加某些东西
        rewrite: (path) => path.replace(/^\/wap/, "wap"),
      },
    },
  },
  css: {
    // css 预处理器
    preprocessorOptions: {
      // provide global variables
      less: {
        additionalData: `
          @import "@/styles/mixins.less";
          @import "@/styles/variables.less";
        `,
      },
    },
    postcss: {
      plugins: [
        postcsspxtoviewport8plugin({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 375, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['wrap'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          landscape: false // 是否处理横屏情况
        }),
      ],
    },
  },
});
