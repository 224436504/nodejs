var http=require('http');
var server=http.createServer();
//IncomingMessage类型,代表客服端发来的请求
server.on('request',function(req,res){
	console.log(req.httpVersion);//http协议的版本号
	console.log(req.method);//请求方式
	console.log(req.headers);//http头文件
	console.log(req.url);// 统一资源定位符
});
server.listen(3000,'127.0.0.1');
