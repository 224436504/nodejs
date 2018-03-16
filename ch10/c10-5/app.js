var fs=require("fs");

var d=require("domain").create();

//d.bind()方法将某个函数绑定到domain中,监控其的异常

fs.readFile('./test.txt',d.bind(function(err,data){
	if(err){
		throw err;
	}else{
		console.log(data.toString());
	}
	
})
);
d.on('error',function(err){
		
	console.log("客户端请求时发生以下错误"+err.message);
	
});

//
//d.run(function(){
//	fs.readFile("./test1.txt",function(err,data){
//	if(err){
//		throw err;
//	}else{
//		console.log(data.toString());
//	}
//});
//})
//

