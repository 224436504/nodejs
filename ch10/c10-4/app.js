var fs=require("fs");
var d=require("domain").create();

d.on('error',function(err){
	
	console.log("客户端请求时发生以下错误"+err.message);
	
});


d.run(function(){
	fs.readFile("./test1.txt",function(err,data){
	if(err){
		throw err;
	}else{
		console.log(data.toString());
	}
});
})



