var net =require('net');
var http=require('http');
var cp=require('child_process');
var  server=net.createServer();

var child=cp.fork('./sub.js');
server.listen(3333,function(){
	child.send('server',server);
	console.log('PID:%s-父进程服务器启动中....',process.pid);
	var httpServer=http.createServer();
	httpServer.on('request',function(req,res){
//		res.writeHead(200,{'content-Type':'text/html'});
//			res.write('<html><head><meta charset="utf-8"></head></html>')
		res.end('父进程处理本次请求');
	});
	httpServer.listen(server);
})
