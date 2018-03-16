
var  http = require('http');
var server= http.createServer();
server.on('request',function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<head><meta charset="utf-8" /></head>');
	res.end('你走开213');

});
server.listen(3000,'127.0.0.1');
console.log('HTTP 服务器正在启动中131');


var http=require("http");
var server=http.createServer();
server.on("request",function(res,req){
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<head><meta charset='uft-8'/></head>");
	res.end("我回来了");
})
server.listen(3001,"127.0.0.1");
console.log("本地服务开启中。。。")；