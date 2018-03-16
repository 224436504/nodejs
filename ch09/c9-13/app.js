var app=require("express")();
var body=require("body-parser");
var session=require("express-session");
var cookie=require("cookie-parser");

app.use(body.urlencoded({extended:false}));
app.use(cookie("secret"));

app.use(session(
		{		secret:"1321",
				resave:false,
				saveUninitialized:false
		}
		));

app.get("/",function(req,res){
	if(req.session.user){

	res.sendFile(__dirname+"/welcome.html");
	 console.log("客户已经通过session进入欢迎页面");
	}else{
		if(req.cookies.user){
			req.session.user=req.cookies.user;
			res.sendFile(__dirname+"/welcome.html");
	 		console.log("客户已经通过cookies进入欢迎页面");
			}else{
				res.sendFile(__dirname+"/login.html");
			}
		
	}
	
})

app.post("/reset.html",function(req,res){
	res.clearCookie("user");
	req.session.destroy(function(){

	})
	res.redirect("/")
})
app.post("/login.html",function(req,res){
	var user=req.body.user;
	var pass=req.body.password;

	if (user=="admin"&&pass=="123456") {
		if(req.body.nologin=="on"){
			res.cookie('user',user,{maxAge:1000*3600*24*7});
		}
	    req.session.user=user;
	    req.session.pass=pass;
		res.sendFile(__dirname+"/welcome.html");
	}else{
		res.sendFile(__dirname+"/login.html");
	}
})



app.get("/welcome.html",function  (req,res) {
	 res.sendFile(__dirname+"/welcome.html");
	 console.log("客户已经进入欢迎页面");
	 

});
app.listen(3333,function(){
	console.log("服务启动中/....")
})