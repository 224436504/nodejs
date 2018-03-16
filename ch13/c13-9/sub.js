var fs=require('fs');
var out =fs.createWriteStream('./out.txt');
process.on('message',function(msg){
	out.write('收到父进程信息：'+msg.question);
	//将缓存内容送入文件中
	out.end(function(){
		process.send({reply:'腻害 好腻害'});
		process.exit();
	})
})
