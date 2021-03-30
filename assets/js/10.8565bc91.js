(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{154:function(e,a,n){"use strict";n.r(a);var s=n(6),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"从头开始搭一个-webpack5-库项目脚手架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从头开始搭一个-webpack5-库项目脚手架"}},[e._v("#")]),e._v(" 从头开始搭一个 webpack5 库项目脚手架")]),e._v(" "),n("p",[e._v("现在呢，我要做一个组件，假设它是一个抽奖组件，使用到的技术是 ES6, handlebars, 我用最新的 webpack5 来做项目脚手架.")]),e._v(" "),n("ol",[n("li",[e._v("首先，生成一个 package.json")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mkdir lottery\ncd lottery\nnpm init -y\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("新建一些必要的文件")])]),e._v(" "),n("ul",[n("li",[e._v("public/index.html 这个是页面 html 模板")]),e._v(" "),n("li",[e._v("src/index.js 这个是入口文件")]),e._v(" "),n("li",[e._v("webpack.config.js webpack 配置文件")]),e._v(" "),n("li",[e._v(".gitignore")]),e._v(" "),n("li",[e._v(".babelrc babel 配置")])]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[e._v("安装 webpack, webpack-cli")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("yarn add -D webpack webpack-cli\n")])])]),n("p",[e._v("然后 webpack.config.js 的内容改成")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// webpack.config.js\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    library: {\n      name: 'Lottery',\n      type: 'umd',\n      export: 'default'\n    }\n  },\n  filename: 'lottery.js',\n  resolve: {\n    extensions: ['*', '.js']\n  }\n}\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("开发时候，我们要用到"),n("code",[e._v("webpack-dev-server")]),e._v(",用来生成一个开发服务器，以及做热更新之类的。 这里注意下，要用最新的 4.0 beta 版本")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("yarn add -D webpack-dev-server@4\n")])])]),n("p",[e._v("然后 package.json 的"),n("code",[e._v("scripts")]),e._v("里，添加两个脚本")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('  "scripts": {\n    "build": "webpack --mode production",\n    "dev": "webpack serve --mode development"\n  },\n')])])]),n("p",[e._v("在 webpack.config.js 里, 添加 devServer 的相关配置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("  devServer: {\n    host: '0.0.0.0',\n    static: path.join(__dirname, 'dist'),\n    compress: false,\n    port: 3333\n  }\n")])])]),n("ol",{attrs:{start:"4"}},[n("li",[e._v("安装 babeljs, 它把我们写的 ES6 以上的语法编译成 ES2015 的，这样可以有更好的兼容性。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("yarn add -D @babel/core @babel/preset-env babel-loader\n")])])]),n("p",[e._v("然后在 webpack.config.js, 增加 babel-loader 的配置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("module: {\n  rules: [\n      {\n        test: /\\.(js)$/,\n        exclude: /node_modules/,\n        use: ['babel-loader']\n      },\n  ]\n}\n")])])]),n("p",[e._v("把根目录的.babelrc，改成这样")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "presets": ["@babel/preset-env"]\n}\n\n')])])]),n("ol",{attrs:{start:"5"}},[n("li",[e._v("我们项目用的是 SCSS，所以要添加 scss 支持")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("yarn add -D css-loader node-sass sass-loader style-loader\n")])])]),n("p",[e._v("然后在 webpack.config.js, 增加 scss 配置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("module: {\n  rules: [\n    ...\n    {\n      test: /\\.(scss|css)$/,\n      use: ['style-loader', 'css-loader', 'sass-loader']\n    },\n  ]\n}\n")])])]),n("ol",{attrs:{start:"6"}},[n("li",[e._v("添加 handlebars 支持")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("yarn add handlebars\n\nyarn add handlebars-loader -D\n")])])]),n("p",[e._v("然后在 webpack.config.js, 增加 handlebars 配置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("module: {\n  rules: [\n    ...\n    { test: /\\.hbs$/, loader: 'handlebars-loader' }\n  ]\n}\n")])])]),n("ol",{attrs:{start:"7"}},[n("li",[e._v("安装 HtmlWebpackPlugin")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("yarn add -D HtmlWebpackPlugin\n")])])]),n("p",[e._v("然后在 webpack.config.js, 增加 HtmlWebpackPlugin 配置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("  plugins: [\n    new HtmlWebpackPlugin({\n      filename: 'index.html',\n      template: './public/index.html', // 使用public里的模板\n      inject: 'head', // 因为我们做的是库文件，所以插到头部去\n      scriptLoading: 'blocking' // 这个要改成blocking, 不然会异步加载\n    })\n  ],\n")])])]),n("p",[e._v("public/index.html 像这样：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n  <script src="//img1.igg.com/lib/jquery/1.12.4/jquery.min.js"><\/script>\n</head>\n\n<body>\n  <div id="lottery"></div>\n\n  <script>\n    var lottery = new Lottery({\n      el: \'#lottery\',\n      lotteryId: 3389\n    })\n  <\/script>\n</body>\n\n</html>\n')])])]),n("p",[e._v("最终，package.json 大概是这样：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "name": "sy-lottery",\n  "version": "1.0.0",\n  "description": "",\n  "main": "dist/lottery.js",\n  "scripts": {\n    "build": "webpack --mode production",\n    "dev": "webpack serve --mode development"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "@babel/core": "^7.13.10",\n    "@babel/preset-env": "^7.13.10",\n    "babel-loader": "^8.2.2",\n    "css-loader": "^5.1.3",\n    "handlebars-loader": "^1.7.1",\n    "html-webpack-plugin": "^5.3.1",\n    "node-sass": "^5.0.0",\n    "sass-loader": "^11.0.1",\n    "style-loader": "^2.0.0",\n    "stylelint": "^13.12.0",\n    "stylelint-config-rational-order": "^0.1.2",\n    "stylelint-config-standard": "^21.0.0",\n    "stylelint-order": "^4.1.0",\n    "stylelint-scss": "^3.19.0",\n    "webpack": "^5.26.3",\n    "webpack-cli": "^4.5.0",\n    "webpack-dev-server": "^4.0.0-beta.0"\n  },\n  "dependencies": {\n    "handlebars": "^4.7.7"\n  }\n}\n\n')])])]),n("p",[e._v("webpack.config.js 长这样：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const path = require('path')\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    library: {\n      name: 'Lottery',\n      type: 'umd',\n      export: 'default'\n    },\n    filename: 'lottery.js'\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.(js)$/,\n        exclude: /node_modules/,\n        use: ['babel-loader']\n      },\n      {\n        test: /\\.(scss|css)$/,\n        use: ['style-loader', 'css-loader', 'sass-loader']\n      },\n      { test: /\\.hbs$/, loader: 'handlebars-loader' }\n    ]\n  },\n  resolve: {\n    extensions: ['*', '.js']\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      filename: 'index.html',\n      template: './public/index.html',\n      inject: 'head',\n      scriptLoading: 'blocking'\n    })\n  ],\n  devServer: {\n    host: '0.0.0.0',\n    static: path.join(__dirname, 'dist'),\n    compress: false,\n    port: 3333\n  }\n}\n\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);