const express = require('express');
// 使用框架创建Web服务器
const app = express();
const fs = require('fs');
app.get('/search', function (req, res) {
  fs.readFile('test.json', 'utf-8', function (err, data) {
    if (err) {
      res.send(err);
    }
    else {
      res.json(JSON.parse(data));
    }
  })
})

// 程序监听3000端口 
app.listen(3000);
console.log('服务器启动成功');

