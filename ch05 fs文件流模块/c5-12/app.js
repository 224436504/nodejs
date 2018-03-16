var fs=require('fs');
fs.open("./msg.txt",'r',function(err,fd){
	if (err) {
		console.log("文件打开失败");
	}else{//准备缓存区
		var buf=new Buffer(255);
		//fd 文件描述符
		//buf 存放数据的缓存区
		//0 存放数据的开始位置
		//6 要读取的字节
		//6 从原始的文件的第6个字节开始读取
		//
		var bytesRead=fs.readSync(fd,buf,0,6,12);
		if(bytesRead>0){
			console.log(buf.toString('utf-8',0,bytesRead));
			console.log(bytesRead);
		}
			
			
		
	}
})
