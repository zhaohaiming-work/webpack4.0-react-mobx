# webpack4.0-react-start-kit

* 需要环境
 ```bash
 node > 8.9.0
 yarn >= 1.6.0 
 ```

* 项目配置

> webpack4.0 + react + react-router-dom + mobx

* 项目启动步骤：

```bash

  如果安装了yarn

  1. yarn install ----  安装node包 

  2. yarn start   ----  启动项目

  如果安装了npm
  1. npm install ----  安装node包 

  2. npm start   ----  启动项目

 ```
 * 项目打包：
 
 ```bash

  如果安装了yarn

   yarn build  

  如果安装了npm
  
   npm build

 ```
 * 项目目录
 ```bash
build               webpack配置目录
src                 整体资源目录
public              静态文件目录
src/api             api请求路径
src/components      公用模板目录
src/func            工具类函数库
src/mobx            mobx配置
src/routes          页面级路由
src/styles          公用的样式
src/App.js          根组件
src/index.html      模板文件
src/main.js         入口文件
src/normalize.js    polyfill库
 ```
 * 项目规范

 ```
 1、class样式用'-'隔开
 2、js变量用驼峰命名法
 3、页面级路由采用首字母大写
 4、文件名命名采用驼峰
 ```