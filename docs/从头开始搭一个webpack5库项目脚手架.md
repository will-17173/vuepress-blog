# 从头开始搭一个 webpack5 库项目脚手架

现在呢，我要做一个组件，假设它是一个抽奖组件，使用到的技术是 ES6, handlebars, 我用最新的 webpack5 来做项目脚手架.

1. 首先，生成一个 package.json

```
mkdir lottery
cd lottery
npm init -y
```

2. 新建一些必要的文件

- public/index.html 这个是页面 html 模板
- src/index.js 这个是入口文件
- webpack.config.js webpack 配置文件
- .gitignore
- .babelrc babel 配置

3. 安装 webpack, webpack-cli

```
yarn add -D webpack webpack-cli
```

然后 webpack.config.js 的内容改成

```
// webpack.config.js

module.exports = {
  entry: './src/index.js',
  output: {
    library: {
      name: 'Lottery',
      type: 'umd',
      export: 'default'
    }
  },
  filename: 'lottery.js',
  resolve: {
    extensions: ['*', '.js']
  }
}
```

3. 开发时候，我们要用到`webpack-dev-server`,用来生成一个开发服务器，以及做热更新之类的。 这里注意下，要用最新的 4.0 beta 版本

```
yarn add -D webpack-dev-server@4
```

然后 package.json 的`scripts`里，添加两个脚本

```
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack serve --mode development"
  },
```

在 webpack.config.js 里, 添加 devServer 的相关配置

```
  devServer: {
    host: '0.0.0.0',
    static: path.join(__dirname, 'dist'),
    compress: false,
    port: 3333
  }
```

4. 安装 babeljs, 它把我们写的 ES6 以上的语法编译成 ES2015 的，这样可以有更好的兼容性。

```
yarn add -D @babel/core @babel/preset-env babel-loader
```

然后在 webpack.config.js, 增加 babel-loader 的配置

```
module: {
  rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
  ]
}
```

把根目录的.babelrc，改成这样

```
{
  "presets": ["@babel/preset-env"]
}

```

5. 我们项目用的是 SCSS，所以要添加 scss 支持

```
yarn add -D css-loader node-sass sass-loader style-loader
```

然后在 webpack.config.js, 增加 scss 配置

```
module: {
  rules: [
    ...
    {
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
  ]
}
```

6. 添加 handlebars 支持

```
yarn add handlebars

yarn add handlebars-loader -D
```

然后在 webpack.config.js, 增加 handlebars 配置

```
module: {
  rules: [
    ...
    { test: /\.hbs$/, loader: 'handlebars-loader' }
  ]
}
```

7. 安装 HtmlWebpackPlugin

```
yarn add -D HtmlWebpackPlugin
```

然后在 webpack.config.js, 增加 HtmlWebpackPlugin 配置

```
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html', // 使用public里的模板
      inject: 'head', // 因为我们做的是库文件，所以插到头部去
      scriptLoading: 'blocking' // 这个要改成blocking, 不然会异步加载
    })
  ],
```

public/index.html 像这样：

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="//img1.igg.com/lib/jquery/1.12.4/jquery.min.js"></script>
</head>

<body>
  <div id="lottery"></div>

  <script>
    var lottery = new Lottery({
      el: '#lottery',
      lotteryId: 3389
    })
  </script>
</body>

</html>
```

最终，package.json 大概是这样：

```
{
  "name": "sy-lottery",
  "version": "1.0.0",
  "description": "",
  "main": "dist/lottery.js",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack serve --mode development"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.13.10",
    "@babel/preset-env": "^7.13.10",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.1.3",
    "handlebars-loader": "^1.7.1",
    "html-webpack-plugin": "^5.3.1",
    "node-sass": "^5.0.0",
    "sass-loader": "^11.0.1",
    "style-loader": "^2.0.0",
    "stylelint": "^13.12.0",
    "stylelint-config-rational-order": "^0.1.2",
    "stylelint-config-standard": "^21.0.0",
    "stylelint-order": "^4.1.0",
    "stylelint-scss": "^3.19.0",
    "webpack": "^5.26.3",
    "webpack-cli": "^4.5.0",
    "webpack-dev-server": "^4.0.0-beta.0"
  },
  "dependencies": {
    "handlebars": "^4.7.7"
  }
}

```

webpack.config.js 长这样：

```
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    library: {
      name: 'Lottery',
      type: 'umd',
      export: 'default'
    },
    filename: 'lottery.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.hbs$/, loader: 'handlebars-loader' }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      inject: 'head',
      scriptLoading: 'blocking'
    })
  ],
  devServer: {
    host: '0.0.0.0',
    static: path.join(__dirname, 'dist'),
    compress: false,
    port: 3333
  }
}

```
