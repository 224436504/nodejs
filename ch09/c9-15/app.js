var app=require("express")();
var serveStatic= require("serve-static");
var mysql=require("mysql");
var bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));//关闭qs库使用新版本函数 为了照顾前者设置了一个端口
//建立连接池
var pool=mysql.createPool({
		user:"mysqladmin",
		password:'123456',
		host:'localhost',
		port:3306,
		database:'nodejs'
	});


//默认addbook.html
app.use("/addbook",serveStatic(__dirname,{"index":['addbook.html']}));
app.use(serveStatic(__dirname+"/public"));
app.post("/addbook",function(req,res){

	pool.getConnection(function(err,connection){
	if(err){
		console.log("与mysql数据库连接失败")
	}else{
		console.log("与mysql数据库连接成功")
		var str;
		var $where={
			bookname:req.body.bookname,
			author:req.body.author,
			price:req.body.price,
			image:req.body.image
		};
		connection.query('insert into book set?',$where,function(err){
			if(err){
				str="数据添加失败";
			}else{
				str="数据添加成功";
			
			}
			connection.release();
			res.send(str);
			})
		}
	
	});
})
app.listen(3333,function(){
	console.log('启动服务器');
})