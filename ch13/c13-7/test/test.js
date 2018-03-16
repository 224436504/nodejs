var writeNum=function(i){
	console.log(i.toString()+'\r\n');
	
}

for(var i=0;i<100;i++){
	setTimeout(writeNum,1000*5,i);
}
