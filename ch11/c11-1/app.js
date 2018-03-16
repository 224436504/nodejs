var  http=require("http");
var fs=require('fs');
var sio=require("socket.io");

var server=http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':"text/html"});
	res.end(fs.readFileSync('./index.html'));
	 
//	res.sendFile(__dirname+"/index.html",function(err){
//		if(err){
//			res.end("你可拉倒吧!");
//			console.log("请求服务失败")
//		}
	
//	})

})
server.listen(3333,function(){
	console.log("服务器启动....")
})
//必须 2  2附着在server上 不能单独存在 启动socket.io服务器
var io=sio.listen(server);
io.on("connection",function(socket){
	console.log("已经和客户端建立连接");
	socket.send('你很棒棒哦!!!');
	socket.on('message',function(data){
			console.log(data);
	});
	socket.on('disconnect',function(){
		console.log("客户端已经断开连接")
	})
})
