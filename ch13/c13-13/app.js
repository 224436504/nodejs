var cp=require('child_process');
var child=cp.execFile('test1.bat',['one','2','3','4'] ,function(err,stdout,stderr){
	if(err){
		console.log('子进程创建失败'+err);
		process.exit();
	}else{
		console.log('子进程标准输出:'+stdout.toString());
		child2.stdin.write(stdout.toString());
	}
})
var child2=cp.execFile('test2.bat');
