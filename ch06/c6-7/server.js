var net=require('net');
var server=net.createServer();
server.on("connection",function(socket){
	console.log("客户端已建立连接");
	socket.on('data',function(data){
		console.log(data.toString());
		socket.write('服务端表示很舒服');
	});

})
server.on("listening",function(){
	console.log("启动tcp监听...");
})
server.listen(3000,'127.0.0.1');
