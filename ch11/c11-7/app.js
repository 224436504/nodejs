var  http=require("http");
var app=require('express')();
var sio=require("socket.io");
var server=http.createServer(app);
app.get('/',function(req,res){
	res.sendFile(__dirname+'/chat.html');
});


server.listen(3333,function(){
	console.log("服务器启动....");
	
})
var io=sio.listen(server);
var names=[];
io.on('connection',function(socket){
	console.log('已经和客户端建立连接');
	//登录事件
	socket.on('login',function(name){
		//console.log(name);
		//处理重名事件
		for(i=0;i<names.length;i++){
			if(names[i]==name){
				socket.emit('duplicate');
			 	return;
			}			
		}
		names.push(name);
		io.sockets.emit('login',name);
		io.sockets.emit('sendClients',names);
		
	});
	//注销事件
	socket.on('logout',function(name){
		for(i=0;i<names.length;i++){
			if(names[i]==name){
				names.splice(i,1);
				break;
			}			
		}
		io.sockets.emit('logout',name);
		io.sockets.emit('sendClients',names);
	});
	//消息事件
	socket.on('sendMsg',function(arr){
		io.sockets.emit('sendMsg',arr);
	});
	
})
