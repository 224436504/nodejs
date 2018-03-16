var url=require('url');
var http=require('http');
var server=http.createServer();
server.on('request',function(req,res){
	res.write('<html><head><meta charset="utf-8"/></head>');
	console.log('af');
	var urlObj=url.parse(req.url);
	switch(urlObj.pathname){
		case '/':
		break
		case '/index.html':
		res.write('<body>您正在访问首页</body></html>');
		break
		default :
		res.write('<body>您正在访问的页面为'+urlObj.pathname+'</body></html>')
			}
	res.end();
});

server.listen(3000,'127.0.0.1');