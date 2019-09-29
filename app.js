// const express =require('express');
// const app =express();
// app.get('/api/getUserInfo',(req,res)=>{
//     res.send({
//         name:'小明',
//         age:13
//     })
// })
// app.listen(8081,()=>{
//     console.log("服务器已开启");
    
// })
var express = require("express");//先npm安装express
var app = express();
app.get('/',function (req,res) {//根目录
    res.send('你好！');
});
app.get('/my',function(req,res){//指定目录
    res.send("对了，就是在这里。");
});
app.use(express.static('./xsbm'));//静态目录
app.listen(3000);