//子进程接收父进程发来的信息

process.on('message',function(msg){
	console.log("父进程：",msg);
	process.send({reply:'很帅 帅爆了'});
	process.exit();
})
