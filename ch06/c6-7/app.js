var net=require('net');
var socket=new net.Socket(); //套接字
socket.connect(3000,'127.0.0.1',function(){

	console.log("成功连接到服务器");
	socket.write('客户端成功的上了你');
});
socket.on('data',function(data){
	console.log(data.toString())
	socket.end(function(){
		console.log('客户端你自己已经断开连接');
		//socket.write('客户端已经断开连接');
	});
})