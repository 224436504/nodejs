var cluster=require('cluster');
cluster.setupMaster({
	exec:'sub.js'
})
for(var i=0;i<4;i++){
	cluster.fork();
}
console.log('主进程正在工作中....')
