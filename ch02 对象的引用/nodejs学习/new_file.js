var http=require("http");
var server=http.createServer();
server.on('request',function(res,req){
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write()
});
