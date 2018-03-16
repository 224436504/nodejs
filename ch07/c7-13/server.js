var http =require("http");
var server=http.createServer();
server.on('request',function(req,res){
	req.on('data',function(data){
		console.log(data.toString());
		res.write("我收到了 ");
	});
	req.on('end',function(){

		res.end();
	})
});
server.on('listening',function(){
	console.log('服务器启动中.....');
});
server.listen(3000,'127.0.0.1');