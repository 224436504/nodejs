var  http=require("http");
var options={
	hostname:'localhost',
	port:3333,
	path:'/',
	method:'get'
};
var count=0;
var count1=0
for(var i=0;i<30;i++){
	
	var req=http.request(options,function(res){
		res.on('data',function(data){
			if(data.toString()==="父进程处理本次请求"){
				count=count+1;
			}else{
				count1=count1+1;
			}
			console.log(data.toString())
		})
	});
	req.end();
}
console.log("共有"+count+"次父进程")
console.log("共有"+count1+"次子进程")