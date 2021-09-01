const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name]__bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]?[hash]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
    publicPath: "/dist/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new GoogleFontsPlugin({
      fonts: [
        {
          family: "Noto Sans KR",
          variants: ["500", "700"],
          display: "block",
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
