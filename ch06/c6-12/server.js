var dgram =require('dgram');
var server= dgram.createSocket('udp4');
server.on('error',function(err){
	console.log(err);
})
server.on('listening',function(){
	console.log('udp服务器开始监听.....');
	server.setBroadcast(true);//启动广播功能
	server.setTTL(128);//数据包转发的生命值128 不超过256
	server.send('hello World >+< LF',3001,'192.168.1.255');
})
server.bind(3000,'192.168.1.181');

