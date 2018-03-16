var http=require('http');
var server=http.createServer(function(req,res){
	res.end("端口进程号"+process.pid);
});
server.listen(3333,function(){
	console.log("服务器启动...");
})

