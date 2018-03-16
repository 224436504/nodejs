var fs=require('fs');
var net=require('net');
var socket=new net.Socket();
socket.connect(3000,'127.0.0.1');
socket.on('connect',function(){
	console.log('成功连接到服务器');
	var file=fs.createReadStream('./61887-106.jpg');
	file.on('data',function(data){
		socket.write(data);
	})
	file.on('end',function(){
		console.log('文件传输结束');
	})
	file.on('close',function(){
		console.log('文件关闭');
		socket.end(function(){
			console.log('socket端口已经自动断开')
		})
	})2
})

/* or socket.conncect(3000,'127.0.0.1',function(){

})*/
