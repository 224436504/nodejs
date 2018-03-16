var cp=require('child_process');
var fs=require('fs');
var out =fs.openSync('./test/out.txt','w');


var child=cp.spawn('node.exe',['cope.js'],{cwd:'./test',stdio:[0,out,2]});


child.on('error',function(err){
	console.log(err.message);
})
child.on('exit',function(code,signal){
	console.log('code:'+code);
	console.log('signal:'+signal);
})

//自定义关闭子进程的方法
//var terminalChild=function(){
//	child.kill();
//}
//
//setTimeout(terminalChild,10*1000);
console.log('主进程正在运行')
