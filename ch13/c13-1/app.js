//process  nodejs内置的进程对象 pid 进程id5825

var cp=require('child_process');
//child_process.spawn(command,args,options) 语法格式
//command ---程序名称
//args---提供的参数
//options---选项
var child=cp.spawn('notepad.exe',['ok.txt'],{cwd:'./test',detached:true});
//detached 将子进程独立于父进程运行



console.log(process.pid);