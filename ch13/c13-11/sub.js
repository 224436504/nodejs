
process.on('message',function(msg,socket){
	if(msg=='socket'){
		if(socket){
			console.log(process)
			socket.end('请求被'+process.argv[2]+'处理');
		}
	}
});
