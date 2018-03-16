var dgram =require('dgram');
var client= dgram.createSocket('udp4');
client.on("listening",function(){
	console.log('udp客户端正在监听....');

});
client.on('message',function(msg,rinfo){
	console.log('服务器回话：'+msg +rinfo.address);
})
client.bind(3001,'192.168.1.181');