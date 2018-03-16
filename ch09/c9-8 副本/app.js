var express=require("express");
var bodyParser=require("body-parser");//中间件模块 解析网页内容  
var app=express();
var mysql =require("mysql");
//建立连接池
var pool=mysql.createPool({
		user:"mysqladmin",
		password:'123456',
		host:'localhost',
		port:3306,
		database:'nodejs'
});
app.use(bodyParser.urlencoded({extended:false}));
app.get("/index.html",function(req,res){
	res.sendFile(__dirname+"/index.html");
console.log("服务器收到get请求");
});


app.post("/index.html",function(req,res){


console.log("书名："+req.body.bookname);
console.log("作者："+req.body.author);
console.log("价格："+req.body.price);

pool.getConnection(function(err,connection){
	if(err){
		console.log("与mysql数据库连接失败")
	}else{
		var str;
		connection.query('insert into book set?',{
			bookname:req.body.bookname,
			author:req.body.author,
			price:req.body.price
		},function(err){
			if(err){
				str="数据添加失败";
			}else{
				str="数据添加成功";
			
			}
			connection.release();
			res.send(str);
		})
	}
	
})

})
app.listen(3000,'127.0.0.1',function(){
	console.log('启动服务器');
})