# 简易环境搭建 + 动态配置

## 1. init npm project with webpack

```sh
mkdir web && cd web

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

## 4. plugin

1. clean-webpack-plugin
2. html-webpack-plugin
3. webpack-dev-server

```sh
#clean
npm i -D clean-webpack-plugin

#本地服务
npm i -D webpack-dev-server

#开发html
npm i -D html-webpack-plugin
```

4. webpack-merge
5. husky

```sh
npm i -D webpack-merge

#git hooks
npm i -D husky
```
