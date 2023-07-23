const { defineConfig } = require("@vue/cli-service");
const fs = require("fs");

module.exports = defineConfig({
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/],
    },
  },
  transpileDependencies: true,
  devServer: {
    port: "8080",
    https: {
      key: fs.readFileSync("./privateKey.key"),
      cert: fs.readFileSync("./certificate.crt"),
    },
  },
  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/bytalent-front/'
  // : '/'
});
