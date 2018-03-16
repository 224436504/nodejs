var app=require("express")();
var basicAuth=require("basic-auth");
var mysql=require("mysql");
var bodyParser=require("body-parser");


var auth =function(req,res,next){
	var user=basicAuth(req);
	if (!user||!user.name||!user.pass) {
		res.set("WWW-Authenticate","Basic real=Please enter user&pass!");
		return res.sendStatus(401);
	}
	if(user.name=="admin"&&user.pass=="123456"){
		return next();
	}else{
		res.set("WWW-Authenticate","Basic real=Please enter user&pass!");
		return res.sendStatus(401);
	}
}; 

app.get("/auth",auth,function(req,res) {
	 res.send("滚犊子31231")
})

app.listen("3334",function() {
	console.log("服务器已经启动...");
});