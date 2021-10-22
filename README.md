# front-end-knowledge

安装依赖

```
npm install
```

### 本地调试

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```


本项目验证vue、element、vant的一些功能，js的语法等等知识点。

* 本项目中同时用了elementUI组件和移动端的vant组件，这需要在babel.config.js配置文件里添加这两plugins,样式用了less，
* 在build\webpack.base.config.js下配了添加了webpack配置加载less的loader
* 使用axios网络请求，数据是模拟数据，使用mockjs,数据在mook/index.js
