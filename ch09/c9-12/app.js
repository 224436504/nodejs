var app=require("express")();
var  bodyParser=require("body-parser");
//var cookieParser=require("cookie-parser");
var session =require("express-session");

app.use(bodyParser.urlencoded({extended:false}));
app.use(session(
	{
		secret:" ",
		resave:false,
		saveUninitialized:false}

	))
app.get("/index.html",function(req,res){
	res.sendFile(__dirname+"/index.html");
	console.log("服务器收到get请求");
});
app.post("/index.html",function(req,res){
//console.log(req.body.user+req.body.password)
console.log("服务器收到post数据")
req.session.user=req.body.user;
req.session.password=req.body.password;


res.redirect("/welcome.html") //重定向函数只是路由路径改变 ,并未发送文件
res.send("保存完毕")	
})

app.get("/welcome.html",function(req,res){
	//res.sendFile(__dirname+"/welcome.html");
	
	console.log("服务器收到get请求");
	res.send(req.session.user+":你好帅"+",你的密码是"+req.session.password)
});
app.listen(3000,'127.0.0.1',function(){
	console.log('启动服务器');
})