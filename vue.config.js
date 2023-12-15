const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/test_app_reg_form_users_gallery' : '/',

})
