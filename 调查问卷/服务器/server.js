const express = require('express');
const bodyParser = require('body-parser');

//创建应用
const app = express();

//使用中间件解析主题
app.use(bodyParser());

//使用路由
app.post('/',(req,res)=>{
    //获取提交的数据
    console.log(req.body);
    res.cookie('logger','true')
    res.send(req.body)//返回数据
    
})

//初始化数据可用
app.get('/',(req,res)=>{
    res.send({
        name:"",
        gender:[
        {name:'男',value:"0",checked:true},
        {name:'女',value:"1",checked:false}
        ],
        skills:[
        {name:'HTML',value:"html",checked:false},
        {name:'CSS',value:"css",checked:false},
        {name:'JavaScript',value:"js",checked:false},
        {name:'PhotoShop',value:"ps",checked:false}
        ],
        option:""
    })
})


//开启端口监听
app.listen(3000,()=>{
    console.log('已开启监听！')
})