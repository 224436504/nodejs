var n=process.argv[2];
var fac=function(n){
	if(n!=1){
		return n*fac(n-1);
	}else{
		return 1;
	}	
}
console.log('工作进程正在计算%s的阶乘...',n);
console.log('%d!=%d',n,fac(n));
process.exit();
