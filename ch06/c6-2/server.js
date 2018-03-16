//开发tcp程序
var net=require("net");

var server=net.createServer();
server.on('connection',function(socket){
	console.log("客户端与服务端已经建立联系");
});

server.listen(3000,'127.0.0.1');
server.on('listening',function(){
	console.log("tcp服务器开始监听....");
})