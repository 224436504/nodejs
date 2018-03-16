var net=require('net');
var server=net.createServer(function(socket){
	console.log("客户端连接到服务器");
})
server.listen(3000,'127.0.0.1',function(){
	console.log("tcp服务器开始监听....");
});
server.on("error",function(){
	console.log("地址已被占用！")
})
