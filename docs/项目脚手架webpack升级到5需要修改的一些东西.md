# 项目脚手架 webpack 升级到 5 需要修改的一些东西

今天把公司项目脚手架的 webpack 升级到 5, 操作步骤如下：

1. 升级`webpack`, `webpack-cli`, `webpack-dev-server`

```
yarn add webpack webpack-cli webpack-dev-server@4
```

2. 升级其它依赖包

```
yarn upgrade-interactive --latest
```

之后选择需要升级的包，我这里基本上全部勾上了.

大体上还是比较顺利的，有几个需要注意的地方：

1. 默认打包的 JS 文件里有箭头函数，这个在 output 里改

```
output: {
  environment: {
    arrowFunction: false
  }
},
```

2. `postcss-loader`的`plugins`选项改到`postcssOptions`里

```
// 原来
{
  loader: 'postcss-loader',
  options: {
    plugins: [
      require('postcss-preset-env')(),
      require('postcss-pxtorem')({
        rootValue: 100,
        propWhiteList: [],
        exclude: file => {
          return file.indexOf('pc') > -1
        }
      })
    ]
  }
},

// 新
{
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        require('postcss-preset-env')(),
        require('postcss-pxtorem')({
          rootValue: 100,
          propWhiteList: [],
          exclude: file => {
            return file.indexOf('pc') > -1
          }
        })
      ]
    }
  }
},
```

3. `sass-loader`的`prependData`改成了`additionalData`， 另外参数有变化，且需要 return 原 content

```
// 原来
prependData: (loaderContext) => {
  const { resourcePath } = loaderContext
  if (resourcePath.includes('/pages/') || resourcePath.includes('\\pages\\')) {
    return `
      @import "./src/assets/scss/_mixin.scss";
      @import "./src/assets/scss/gb.scss";
    `
  }
}


// 新
additionalData: (content, loaderContext) => {
  const { resourcePath } = loaderContext
  if (resourcePath.includes('/pages/') || resourcePath.includes('\\pages\\')) {
    return `
      @import "./src/assets/scss/_mixin.scss";
      @import "./src/assets/scss/gb.scss";
      ${content}
    `
  }
  return content
}
```

4. `webpack-merge`不再默认导出`merge`

```
// 原来
const merge = require('webpack-merge')

// 新
const { merge } = require('webpack-merge')
```

5. devServer 需要 4.0beta 版本，变得比较多, 这里可以先看一下 changelog, [https://github.com/webpack/webpack-dev-server/releases](https://github.com/webpack/webpack-dev-server/releases)

```
devServer: {
  static: [consts.DIST_ROOT, 'public'], // contentBase => static
  host: '0.0.0.0',
  port: consts.DEV_PORT,
  hot: true,
  firewall: false, // 原disableHostCheck => firewall里
  dev: {
    writeToDisk: true // 原writeToDisk 集成到dev选项里
  }
}
```
