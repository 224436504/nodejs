var ok=function(){
	console.log('时间到!!?');
	clearTimeout(timer);
};

var timer=setTimeout(ok,5*1000);