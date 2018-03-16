var http=require('http');
var server=http.createServer();
server.on('request',function(req,res){
	// res.writeHead(200,{	'content-Type':'text/html'});
	// res.write('<head><meta charset="utf-8"/></head>');
	// res.end('我来了');
	console.log('客户端发来请求');
})
server.on('listening',function(){
	console.log("HTTP 服务启动中....")
})
server.on('error',function(err){
	if(err.code=='EADDRINUSE'){
		console.log('服务器地址以及端口已经被占用')
	}else{
		console.log(err);
	}
})
server.listen(3000,'127.0.0.1');
