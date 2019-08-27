# 简易环境搭建 + 动态配置

## 1. init npm project with webpack

```sh
mkdir web && cd $_

npm init -y

npm i -D webpack webpack-cli
```

## 2. eslint

### [standard-ref](https://github.com/standard/eslint-config-standard)

### [html-ref](https://github.com/BenoitZugmeyer/eslint-plugin-html/)

```sh
#eslint
npm i -D eslint

#eslint-config-standard 选用
npm i -D eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node

#html 支持
npm i -D eslint-plugin-html
```

## 3. prettier

### [doc-ref](https://prettier.io/docs/en/cli.html)

```sh
npm i -D -E prettier
```

### [参考配置](//https://prettier.io/docs/en/options.html)

```json
{
  "tabWidth": 2,
  "useTabs": false,
  //分号
  "semi": true,
  "singleQuote": false,
  //对象属性引号
  "quoteProps": "as-needed",
  //JSX
  "jsxSingleQuote": false,
  //尾随逗号
  "trailingComma": "none",
  //对象括号空格
  "bracketSpacing": true,
  //尾行不单独
  "jsxBracketSameLine": true,
  //箭头
  "arrowParens": "avoid",
  "parser": null,
  "filepath": null,
  //html空白
  "htmlWhitespaceSensitivity": "css",
  //行结束
  "endOfLine": "lf"
}
```

### [eslint 兼容插件](https://github.com/prettier/eslint-plugin-prettier)

```sh
npm i -D eslint-plugin-prettier eslint-config-prettier
```

###

[表达式](https://github.com/prettier/prettier/issues/2078)

```sh
#需要加引号
prettier --write --config .prettierrc 'src/**/*'
```

## 4. plugin

1. clean-webpack-plugin
2. html-webpack-plugin
3. webpack-dev-server
4. webpack-merge
5. husky

```sh
#clean
npm i -D clean-webpack-plugin

#本地服务
npm i -D webpack-dev-server

#开发html
npm i -D html-webpack-plugin

npm i -D webpack-merge

#git hooks
npm i -D husky
```

## 5. vue

### [vue-loader](https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE)

```sh
npm i vue
npm i -D vue-loader vue-template-compiler

#依赖
npm i -D css-loader

```

### [css extract](https://vue-loader.vuejs.org/zh/guide/extract-css.html#webpack-4)

```sh
npm i -D mini-css-extract-plugin
```

## 6. babel

###[doc](https://github.com/babel/babel-loader)

```sh
#@开头是scoped包
#@preset-env整合了多个包
npm i -D babel-loader @babel/core @babel/preset-env

#vue
npm i -D babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx babel-helper-vue-jsx-merge-props
```

## 7.打包优化

- [hot:热部署](https://webpack.js.org/plugins/hot-module-replacement-plugin/)

- [ddl](https://webpack.js.org/plugins/dll-plugin/) #TODO

- [split][https://webpack.js.org/plugins/split-chunks-plugin/]

```json
optimization: {
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    name: true,
    cacheGroups: {}
  }
}

```

## 8.vue-router

[doc](https://router.vuejs.org/zh/installation.html)

```
npm i vue-router
```
