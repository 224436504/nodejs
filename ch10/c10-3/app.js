var http=require("http");
//处理异常的模块
var domain=require("domain");
	var server=http.createServer(function(req,res){
		var d=domain.create();
		d.on('error',function(err){
			res.writeHead(200,{'COntent-Type':'text/html'});
			res.write('<head><meta charset="UTF-8"></head>');
			res.end("请求客户端数据时发生以下错误"+err.message);
			console.log("客户端请求时发生以下错误"+err.message);
		});
		d.run(function(){
			noexist();
			res.writeHead(200,{'COntent-Type':'text/html'});
			res.write('<head><meta charset="UTF-8"></head>');
			res.end("你给我滚!!Q!!");
		});
	
});

server.listen(3001,"127.0.0.1",function(){
	console.log("服务器启动");
})


	//console.log("客户端请求时发生以下错误"+err);
	//处理未捕获的异常;
//process.on('uncaughtException',function(err){
//	console.log("客户端请求时发生以下错误:"+err.message);
//});
//
//
