var cp=require('child_process');
var normal=cp.fork('sub.js',['normal']);
var special=cp.fork('sub.js',['special']);

var net=require('net');
var server=net.createServer({pauseOnConnect:true});
//该属性默认为false，
//当它被设置为true的时候表示该TCP服务端与之相连接的客户端socket传输过来的数据将不被读取，
//即不会触发data事件。
//如果需要读取客户端传输的数据，
//可以使用socket的resume方法来设置该socket。
server.on('connection',function(socket){
	if(socket.remoteAddress=='127.0.0.1'){
		special.send('socket',socket);
		return;
	}
	normal.send('socket',socket)
})

server.listen(3333,'127.0.0.1',function(){
	console.log('服务器启动....')
})
