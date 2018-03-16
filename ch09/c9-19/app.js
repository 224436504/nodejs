var app=require("express")();
var serveStatic= require("serve-static");
var bodyParser= require("body-parser");
var mysql=require("mysql");
var mylib=require("./lib/mylib");
	 pool=mysql.createPool({
		user:"mysqladmin",
		password:'123456',
		host:'localhost',
		port:3306,
		database:'nodejs'
	});
app.use(bodyParser.urlencoded({extended:false}));
app.use(serveStatic(__dirname+"/public"));
app.set("view engine",'ejs');


app.get("/findbooks",mylib.findbooks_get);
app.post("/findbooks",mylib.findbooks_post);












 app.listen(3333,function(){
	console.log('启动服务器');
})

