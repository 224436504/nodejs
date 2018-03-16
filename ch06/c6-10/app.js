var readline=require('readline');
var net=require('net');
var colors=require('colors');
var socket=new net.Socket();
socket.connect(3000,'192.168.1.181');
socket.on('connect',function(){
	console.log('已经与服务器建立联系');
	//创建接口对象
	var rl=readline.createInterface({
		input:process.stdin,
		output:process.stdout
	});
	//设置提示符
	rl.setPrompt('//:');
	//进入循环
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
	socket.on('data',function(data){
		console.log("他说："+data.toString().red);
	});
	rl.on('close',function(){
		socket.end();
	})
})