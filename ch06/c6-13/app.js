var dgram =require('dgram');
var client= dgram.createSocket('udp4');
client.on('error',function(err){
console.log(err);
});
var multicaseAddr='224.0.1.100';

client.on('listening',function(){
	console.log('客户端开始监听');
	client.addMembership(multicaseAddr);
})
client.on('message',function(msg,rinfo){
 console.log('%s:来自%s',msg,rinfo.address);

})

client.bind(3001);