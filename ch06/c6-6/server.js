var net=require("net");
var server=net.createServer();

	server.on('connection',function(socket){
		//不再接受新的客户端连接 当现存连接销毁后，关闭服务器
		server.close();

		console.log("tcp服务器不再接受客户端连接")
	});

server.on('close',function(){
	console.log("tcp服务器关闭");
});

server.listen(3000,'127.0.0.1',function(){
console.log("tcp服务器监听开始...");
});