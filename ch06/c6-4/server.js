var net=require('net');
var server=net.createServer(function(socket){
	console.log("客户端连接到服务器");
})
server.listen(3000,'127.0.0.1',function(){
	var addr=server.address();
    console.log(addr);
	console.log("家族",addr.family);
	console.log("地址",addr.address);
	console.log("端口",addr.port);
});
server.on("error",function(){
	console.log("地址已被占用！")
})
