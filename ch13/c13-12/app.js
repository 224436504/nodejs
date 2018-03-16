var cp=require('child_process');
var child=cp.exec('node test1.js one 2 3 4',function(err,stdout,stderr){
	if(err){
		console.log('子进程创建失败'+err);
		process.exit();
	}else{
		console.log('子进程标准输出:'+stdout.toString());

		child2.stdin.write(stdout.toString());
	}
})
var child2=cp.exec('node test2.js',function(err,stdout,stderr){
	process.exit();	
})
