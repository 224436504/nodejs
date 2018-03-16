var dgram=require('dgram');
var server=dgram.createSocket('udp4');
//如果对方发来数据，触发message事件
server.on('message',function(msg,rinfo){
	console.log(msg.toString());
	console.log(rinfo);
	server.send("我收到了",rinfo.port,rinfo.address,function(err,bytes){
	if(err){
		console.log(err);
	}else{
		console.log("回复成功")
	}
});
});

server.on('listening',function(){
	console.log('udp服务开始监听...');
});
server.bind(3000,"192.168.1.181");