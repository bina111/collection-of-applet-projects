const http = require("http");
//引入websocket库
const WebSocketServer = require("websocket").server;

//创建一个http server
const httpServer = http.createServer(function (req,res) {  
    res.writeHead(404);
    res.end();
});

//创建一个webSocket server
const wsServer = new WebSocketServer({
    httpServer,
    autoAcceptConnections: true
});

//事件监听
wsServer.on('connect',(connection)=>{
    //用于监控是否接受到message
    connection.on('message',message=>{
        console.log(">>message",message);
        if(message.type === 'utf8'){
            var data = {content: '自动回复', date: '2019-01-16'};
            //服务器返回的消息
            connection.sendUTF(JSON.stringify(data));
        }
    });

    //链接关闭监听
    connection.on('close',(reasonCode,discription)=>{
        console.log('[' + new Date() + '] Peer ' +connection.remoteAddress +' disconnected.')
    });

    //接受控制台的输入
    process.stdin.on('data',(data)=>{
        var data = data.toString().trim();
        data = {'content':data,'date':'2022-4-16'};
        connection.sendUTF(JSON.stringify(data));
    })
});

httpServer.listen(3000,()=>{
    console.log('[' + new Date() + ']　server is listening on port 3000');
})

