var app=require("express")();
var bodyParser= require("body-parser");

domain=require("domain");
app.set("view engine",'ejs');
//var mysql=require("mysql");
var login=require("./lib/login");
//	 pool=mysql.createPool({
//		user:"mysqladmin",
//		password:'123456',
//		host:'localhost',
//		port:3306,
//		database:'nodejs'
//	});
app.use(bodyParser.urlencoded({extended:false}));


app.get("/",login.index_get);
app.post("/check",login.check_post);



 app.listen(3333,function(){
	console.log('启动服务器');
})
