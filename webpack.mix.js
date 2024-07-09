let mix = require("laravel-mix")
mix
  .ts("src/app.ts", "dist")
  .sass("src/assets/scss/app.scss", "css")
  // .css("node_modules/bootstrap/dist/css/bootstrap.css", "css")
  // .css("node_modules/bootstrap-vue-next/dist/bootstrap-vue-next.css", "css")
  .setPublicPath("dist")
  .vue({ version: 3, extractStyles: true })
  // .extract()
  .webpackConfig({
    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: { appendTsSuffixTo: [/\.vue$/] },
      }, ],
    },
    resolve: {
      extensions: [".*", ".wasm", ".mjs", ".js", ".jsx", ".json", ".ts", ".tsx", ".vue"],
    },
  })