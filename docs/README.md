---
home: true
heroImage: /heroImage.png
actionText: About Me →
actionLink: /about/
features:
- title: 简明优先
  details: 对以 markdown 为中心的项目结构，做最简化的配置，帮助你专注于创作。
- title: Vue 驱动
  details: 享用 Vue + webpack 开发环境，在 markdown 中使用 Vue 组件，并通过 Vue 开发自定义主题。
- title: 性能高效
  details: VuePress 将每个页面生成为预渲染的静态 HTML，每个页面加载之后，然后作为单页面应用程序(SPA)运行。
footer: MIT Licensed | Copyright © 2018-present VuePress
---


# VuePressTemplate

使用[VuePress](https://vuepress.vuejs.org/)搭建静态网站，可以做开源项目官方站点，并修改为绿色主题。

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
![logo](@alias/logo.png)
## 三、更多用法

https://vuepress.vuejs.org/zh/guide/assets.html