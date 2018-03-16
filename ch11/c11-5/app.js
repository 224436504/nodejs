var  http=require("http");
var app=require('express')();
var sio=require("socket.io");

var server=http.createServer(app);
app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
	
})
server.listen(3333,function(){
	console.log("服务器启动....")
});
//必须 2  2附着在server上 不能单独存在 启动socket.io服务器
var io=sio.listen(server);
io.on("connection",function(socket){
		console.log("已经和客户端建立连接");	
		socket.on('setNickname',function(name){
			socket.nickname=name;
			console.log('昵称保存完毕666');
		});
		socket.on('getNickname',function(){
			socket.emit('sendNickname',socket.nickname);			
			
		})
		//socket.emit('news',{hello:"天天向上"});
});



