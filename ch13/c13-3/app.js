var cp=require('child_process');
var child=cp.spawn('notepad.exe');

child.on('exit',function(code,signal){
	console.log(code+signal);
})

//自定义关闭子进程的方法
var terminalChild=function(){
	child.kill();
}

setTimeout(terminalChild,10*1000);
console.log('主进程正在运行')
