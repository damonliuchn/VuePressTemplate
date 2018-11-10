# VuePressTemplate

使用[VuePress](https://vuepress.vuejs.org/)搭建静态网站，可以做开源项目官方站点，并修改为绿色主题。



<img src="https://raw.githubusercontent.com/MasonLiuChn/VuePressTemplate/master/readme.jpg" width="50%" height="50%" />

## 一、启动

- 1.安装node modules
```bash
npm i
```
- 2.开发模式  (访问地址http://localhost:8080)
```bash
npm run dev
```
- 3.发布模式  (访问地址http://localhost:8081)
```bash
npm run build
npm run serve
```

## 二、编写文章

1. 在docs及其子目录下编写md文件，一个md文件即一篇文章，文件夹下的README.md为改文件夹默认文章
2. 侧边栏显示需要配置docs/.vuepress/config.js的sidebar
3. 图片引用：图片放在docs/assets下，通过 `![logo](@alias/logo.png)` 来引入

## 三、更多用法

https://vuepress.vuejs.org/zh/guide/assets.html