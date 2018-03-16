var http =require('http');
var server=http.createServer();
server.on('request',function(req,res){
	console.log('客户端请求：%s',(new Date()).toLocaleString());
	res.end();
})


server.setTimeout(3*1000);
server.on('timeout',function(socket){
 	console.log('服务器连接超时：%s',
 		(new Date()).toLocaleString());
 })


server.on('error',function(err){
if(err.code=='EADDRINUSE'){
		console.log('服务器地址以及端口已经被占用')
	}else{
		console.log(err);
	}
})
server.listen(3000,'127.0.0.1');