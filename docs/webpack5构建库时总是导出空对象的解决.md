# webpack5 构建库时总是导出空对象的解决

晚上用 webpack5 弄个库文件的脚手架，发现总是导出一个空对象, 搞了半天，发现是`webpack-dev-server`版本不对，`4.0.0-beta.0`才支持 webpack5

```
yarn add -D webpack-dev-server@4

// webpack.config.js
// 把
devServer: {
  contentBase: path.resolve(__dirname, 'test'),
  compress: true,
  port: 8080
}
// 改成
devServer: {
  static: path.resolve(__dirname, 'test'),
  compress: true,
  port: 8080
}
```

[https://github.com/webpack/webpack-dev-server/issues/2484](https://github.com/webpack/webpack-dev-server/issues/2484)
