var net=require('net');
var server=net.createServer(function(socket){
		//console.log("客户端与服务端已经建立联系");
	server.getConnections(function(err,count){
		console.log("当前存在%d个客户端连接",count);
		server.maxConnections=2;
		});

});
server.listen(3000,'127.0.0.1');
server.on("error",function(){
	console.log("地址已被占用！")
})
