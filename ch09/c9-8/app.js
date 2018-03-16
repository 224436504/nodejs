var express=require("express");
var app=express();
var mysql=require("mysql");

	var bodyParser=require("body-parser");//中间件模块 解析网页内容  
	//处理get请求
	app.use(bodyParser.urlencoded({extended:false}));
	app.get("/index.html",function(req,res){
		res.sendFile(__dirname+"/index.html");
	console.log("服务器收到get请求");
	});
	//处理post请求
	app.post("/index.html",function(req,res){
	console.log("书名："+req.body.bookname);
	console.log("作者："+req.body.author);
	console.log("价格："+req.body.price);
	var bookname=req.body.bookname;
	var author=req.body.author;
	var price=req.body.price;
	if(bookname||author||price){
		insertBook(bookname,author,price);
		res.send("服务端已经成功接收到数据");
	}
	
	})
	//建立监听事件
	app.listen(3000,'127.0.0.1',function(){
	console.log('启动服务器...');
	})

var insertBook=function(bookname,author,price){
		//创建数据库连接
	var client=mysql.createConnection({
		user:"mysqladmin",
		password:'123456',
		host:'localhost',
		port:3306,
		database:'nodejs'
	});
	client.connect(function(err){
		if(err){
			console.log(err);
		}else{
			inserData();
			// console.log("表格数据为:");
			// queryData();
		}
	});
	//数据库连接错误处理
	client.on('error',function(err){
		if(err.code=='PROTOCOL_CONNECTION_LOST'){
		console.log('连接丢失')
		}else{
			console.log(err);
		}
	});
	var inserData=function(){
		client.query('insert into book set?',{
			bookname:bookname,
			author:author,
			price:price
		},function(err,results){
			if(err){
				console.log("数据添加失败"+err);
			}else{
				console.log("新增行ID为:"+results.insertId);
				client.end(function(err){
					if(err){

					}else{
						console.log("数据查询结束")
					}
				})
			}
		})
	}
}
	