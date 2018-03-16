var cluster=require('cluster');

//用来设置子进程运行的模块文件
cluster.setupMaster({
	exec:'fac.js',
	args:[8]
});
cluster.fork();
console.log('启动主进程');
