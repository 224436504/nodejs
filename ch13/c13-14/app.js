var cluster=require('cluster');
//如果是主进程
if(cluster.isMaster){
	var os=require('os'); //操作系统
	console.log(os);
	var numCPUs=os.cpus().length;
	console.log(numCPUs);
	for(i=0;i<numCPUs;i++){
		cluster.fork();
	}
}else{
	var http=require('http');
	http.createServer(function(req,res){
		res.end('你个傻帽 --'+cluster.worker.process.pid)
	}).listen(3333);
	console.log('工作进程%s 已经启动...',process.pid);
	
}
