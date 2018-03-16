var  http=require("http");
var app=require('express')();
var sio=require("socket.io");

var server=http.createServer(app);
app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
	
	
})


server.listen(3333,function(){
	console.log("服务器启动");
})


var io=sio.listen(server);
var names=[];
//io.sockets中现有的套接字 即当前的连接量
io.on('connection',function(socket){
	console.log('已经和客户端建立连接'+socket);
	socket.on('login',function(name){
		names.push(name);
		//群发登录消息
		io.sockets.emit('login',names);
	})		
	
})

