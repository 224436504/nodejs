var fs=require('fs');
var net=require('net');
var server=net.createServer();
server.on('connection',function(socket){
	console.log('客户端已经建立连接');
	var file=fs.createWriteStream('./复制得到的图片.jpg');
	socket.on('data',function(data){
		file.write(data);
	});
	socket.on('close',function(){
			console.log("socket连接已经断开");
			file.end();
	});
});
server.on('listening',function(){
	console.log('tcp服务启动监听...');

})
server.listen(3000,'127.0.0.1');