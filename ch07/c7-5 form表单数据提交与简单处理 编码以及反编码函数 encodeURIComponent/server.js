var http =require('http');
var server=http.createServer();
server.on('request',function(req,res){
	//console.log(req.url);
	if(req.url=='/'){
		req.on('data',function(data){
			console.log(decodeURIComponent(data));
		})
		req.on('end',function(){
			console.log('客户端数据已经发送结束');
		})
	}
});
server.on('error',function(err){

});
server.listen(3000,'127.0.0.1')