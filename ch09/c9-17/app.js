var app=require("express")();
var basicAuth=require("basic-auth");
var mysql=require("mysql");
var bodyParser=require("body-parser");
//建立连接池

var pool=mysql.createPool({
		user:"mysqladmin",
		password:'123456',
		host:'localhost',
		port:3306,
		database:'nodejs'
	});
var auth =function(req,res,next){
	console.log("进入auth");
	var user=basicAuth(req);
	pool.getConnection(function(err,connection){
	if(err){
		console.log("与mysql数据库连接失败")
	}else{
		console.log("与mysql数据库连接成功")
		connection.query('select count(*) as num from users where user=? and pass=?',
			[user.name,user.pass],
			function(err,result){
			if(err){
				res.set("WWW-Authenticate","Basic real=Please enter user&pass!");
				return res.sendStatus(401);
			}else{
				console.log("登录成功");
				str="登录成功";
				if (result[0].num>0) {
					connection.release();
					return next();
				}else{
					res.set("WWW-Authenticate","Basic real=Please enter user&pass!");
					return res.sendStatus(401);
				}
			
			}
			
			})
		}
	
	});

}; 

app.get("/auth",auth,function(req,res) {
	 res.send("滚犊子356651565656541");
})

app.listen("3333",function() {
	console.log("服务器已经启动...");
});