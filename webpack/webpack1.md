## 开发pkg问题汇总
1、npm init 快速生成pageage.json文件

## webpack插件plugins
### 1、extract-text-webpack-plugin
将css和js打包分离，把css代码从js中分离出来


## webpack配置部分
### 1、entry入口文件
 写法有3种

1）入口 /src/index.js 编译之后为actUI.js 
 ```
  entry: {
    文件名1: './src/index.js',
    文件名2: './src/style.js'
  },

 ```

 ### 2、output出口文件
 1）出口文件filename为 文件名1.js 文件名2.js 【name】为entry的key值

 ```
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    library: 'actUI',
    libraryTarget: 'umd'
  },
 ```

 ### 3、resolve 配置模块如何被解析
```
resolve: {
  alias: 配置import别名
  extensions 自动解析扩展名（省略后缀），引入的时候可 import xx from ‘./index/main’ 
}
```


## webpack配置过程中遇到的问题汇总

### swiper
【问题】 使用import swiper from ‘swiper’打包报错
【问题原因】上述方法加载的是swiper.esm.bundle.js这个文件，不在webpack配置，是有兼容性问题的
【解决方案】可使用本地仓库js保存swiper方法或者配置webpack打包
【参考链接】 https://www.jianshu.com/p/cebe2b28df85

### webpack配置时配置打包路径resolve方法

```
function resolve (dir) {
  return path.join(__dirname, '..', dir);
}
```

### zepto

【问题】引入zepto报错  js in uglisfy token: name (undefined) [./src/assets/js/zepto.js:7,0]
【问题原因】zepto不支持commonjs引入方式
【解决方法】使用zepto-modules pkg包

### js引入node_modules的css文件时报错
【问题】报错信息 ERROR in ./node_modules/ywbj-ui/dist/yw.css 1:0 Module parse failed: Unexpected token (1:0) 
【解决方案】webpack.common.js配置。js打包时设置exclude: /node_modules
【参考链接】https://blog.csdn.net/wenmin1987/article/details/82817954?utm_source=blogxgwz9

### 使用 ES7 的 async/await 时报错
报错信息：regeneratorRuntime is not defined
【原因】regeneratorRuntime在浏览器上无法识别，
【解决方案】需要安装一个babel-plugin-transform-runtime插件，同时在.babelrc配置 
```
"plugins": ["transform-runtime"]
```



