var net=require('net');
var readline=require("readline");
var server=net.createServer();
var colors=require('colors');
server.on('connection',function(socket){
	console.log('客户端已经建立联系');
	socket.on('data',function(data){
		console.log("他说："+data.toString().yellow);
	});
	var rl=readline.createInterface({
			input:process.stdin,
			output:process.stdout
		});
	rl.setPrompt('@:');
	rl.prompt();
	rl.on('line',function(line){
		switch(line.trim()){
			case 'exit':
				rl.close();
				break;
			default :
				socket.write(line);
				rl.prompt();
				break;
		}
	});
	rl.on('close',function(){
		socket.end();
	})


});
server.on('listening',function(){
	console.log('tcp服务监听开始....');

})
server.listen(3000,'192.168.1.181');