var app=require("express")();
var basicAuth=require("basic-auth");
var mysql=require("mysql");
var bodyParser= require("body-parser");
var cookie=require("cookie-parser");
var session=require("express-session");
var serveStatic= require("serve-static");
var mylib=require("./lib/mylib");

//当使用var声明变量时 无法在其他导入的文件里面引用
	 pool=mysql.createPool({
		user:"mysqladmin",
		password:'123456',
		host:'localhost',
		port:3306,
		database:'nodejs'
	});


app.use(bodyParser.urlencoded({extended:false}));
app.use(cookie("secret"));
app.use(session({resave:false,saveUninitialized:false,secret:"2132"}));
app.use(serveStatic(__dirname+"/public"));

app.set("view engine",'ejs');//ejs渲染view 设置视图网页(ejs)渲染引擎
app.get("/",mylib.login_get);

app.post("/login",mylib.login_post);
app.post("/reset",mylib.reset_post);



 app.listen(3333,function(){
	console.log('启动服务器');
})












