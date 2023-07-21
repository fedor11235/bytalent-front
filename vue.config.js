const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/]
    }
  },
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/bytalent-front/'
  // : '/'
});
