const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/test-work-abz-agency' : '/',

  // css: {
  //   loaderOptions: {
  //     sass: {
  //       // prependData: `@import "@/styles/main.scss";`
  //       additionalData: `@import "@/styles/main.scss";`
  //     }
  //   }
  // }
})
