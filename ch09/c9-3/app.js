var app=require("express")();
app.get("/index.html",function(req,res){
		res.sendFile(__dirname+'/index.html');
})
app.listen(3000,function(){
	console.log("服务器已经启动...");
})
app.post("/index.html",function(req,res){

	console.log("客户端发来了post 请求！");

})