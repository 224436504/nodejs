var http=require('http');
var server=http.createServer();
server.on('request',function(req,res){
	if(req.url=='/'){
		console.log('浏览器发送一个请求');
		var msg="welcome to my world!";
		res.statusCode=200;
		res.statusMessage='welcome here';
		res.setHeader('Content-Type','text-html');
		//res.writeHead(200,{'content-Type':'text/html'});
		res.write('<head><meta charset="utf-8"/></head>'+msg);
	}
		res.end('连接结束');
});

server.on('error',function(err){
		console.log(err);
})
server.listen(3000,'127.0.0.1');
