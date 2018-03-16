var cluster=require('cluster');
if(cluster.isMaster){
	for(var i=0;i<4;i++){
		cluster.fork();
	}
}else{
	
	
	
	
}
cluster.on('fork',function(worker){
	console.log('启动工作进程%s',worker.process.pid);
})
