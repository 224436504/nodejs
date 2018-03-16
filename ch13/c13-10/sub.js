var http=require('http');
process.on('message',function(msg,server){
	if(msg=='server'){
		console.log('PID:%s-子进程服务启动中....',process.pid);
			var httpServer=http.createServer();
		httpServer.on('request',function(req,res){
//			res.writeHead(200,{'content-Type':'text/html'});
//			res.write('<html><head><meta charset="utf-8"></head></html>')
			res.end('子进程处理本次请求');
		});
		httpServer.listen(server);
	}
});
