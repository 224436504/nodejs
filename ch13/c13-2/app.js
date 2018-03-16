var cp=require('child_process');
var child=cp.spawn('notepad.exe');



child.on('exit',function(code,signal){
	console.log('子进程关闭');
	console.log(code,signal);
	//区分子进程如何关闭 signal有值时 为非正常关闭
})

console.log('主进程正在运行')
