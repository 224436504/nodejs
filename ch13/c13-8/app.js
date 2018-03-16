var cp=require('child_process');
// fock 专门用于执行nodejs 的模块文件
var child=cp.fork('./sub.js')
//接收子进程发来的消息
child.on('message',function(msg){
	console.log('子进程：',msg);
})
child.send({question:"我帅不帅？"});

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
