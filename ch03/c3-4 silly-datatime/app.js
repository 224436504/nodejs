var sd=require('silly-datetime');
var count=0;
var showTime=function(){
	if(count<3){
		// var d=new Date();
		// console.log(d.toString());
		count++;
		var time=sd.format(new Date(),'YYYY-MM-DD HH:mm:ss');
		console.log('现在时刻:'+time);
	}
	else{
		clearInterval(timer);
	}
};
var timer=setInterval(showTime,2*1000);