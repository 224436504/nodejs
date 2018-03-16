var net=require('net');
var client=new net.Socket();
client.setEncoding('utf-8');
client.connect(3333,"127.0.0.1");
client.on('data',function(data){
	console.log(data)
})
