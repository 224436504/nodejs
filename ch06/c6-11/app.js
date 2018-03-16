var dgram=require('dgram');
var client=dgram.createSocket('udp4');
client.send('孙啊光',3000,'192.168.1.181',function(err,bytes){
	if(err){
		console.log(err);
	}else{
		console.log("发送成功")
	}
});
client.on('message',function(msg,rinfo){
	console.log(msg.toString());
	console.log(rinfo);
})
 // client.close();
