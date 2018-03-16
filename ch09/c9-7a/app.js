var app=require("express")();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.get("/index.html",function(req,res){
	res.sendFile(__dirname+"/index.html");
console.log("服务器收到get请求");
});

app.post("/index.html",function(req,res){
	var user=req.body.user;
	var password=req.body.password;
	if(user=='admin'&&password=='123456'){
		res.send("登录成功")
	}else{
		res.send("登录失败")
	}

})

app.listen(3000,function(){
	console.log("服务器已经启动...");
})