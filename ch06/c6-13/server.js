var dgram =require('dgram');
var server= dgram.createSocket('udp4');
var color=
server.on('error',function(err){
console.log(err);
})
//定义一个组播地址 注意 组播地址从224-240;
var multicaseAddr='224.0.1.100';
server.bind(3000);//如果未指定ip 会自动匹配
  
server.on('listening',function(){
	console.log('udp 服务器开始监听');
	server.addMembership(multicaseAddr);//加入指定组播地址
	server.setMulticastTTL(128);
	setInterval(function(){
		sendTime();
	},1000)
})
var sendTime=function(){
	server.send((new Date()).toLocaleString()+'龘龘龘龘龘龘███☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺█████✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈❀❀❀❀',3001,
		multicaseAddr);
}

