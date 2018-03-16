var cp=require('child_process');
// fock 专门用于执行nodejs 的模块文件
//silent为true时 子进程标准输出重定向；
var child=cp.fork('./sub.js',{silent:true});
child.on('message',function(msg){
	console.log(msg);
})
//向子进程发信息
child.send({question:'我腻不腻害？'});


console.log('主进程正在运行')

