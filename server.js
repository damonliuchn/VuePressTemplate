var express = require('express');
var app = express();
var fs = require("fs");

app.use('/', express.static('public'));
var port = 8081;
app.listen(port);
console.log('Magic happens on url http://localhost:' + port);

/**
 //可以设置proxy来解决跨域问题
 var proxyMiddleWare= require('http-proxy-middleware');
 var app = express();
 var proxyPath = "http://47.104.208.182:8087";//目标后端服务地址
 var proxyOption ={
    target:proxyPath,
    changeOrigoin:true,
    ws: true,
    pathRewrite: { '^/api': '/' }
};
 app.use(express.static(__dirname + "public"));
 app.use("/api",proxyMiddleWare(proxyOption));
 app.listen(4000);//4000是我要启动的端口
 ---------------------
 作者：bhq1711617151
 来源：CSDN
 原文：https://blog.csdn.net/bhq1711617151/article/details/80423665
 版权声明：本文为博主原创文章，转载请附上博文链接！
 */
