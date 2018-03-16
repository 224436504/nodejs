var express=require("express");
var bodyParser=require("body-parser");//中间件模块 解析网页内容  
var app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.get("/index.html",function(req,res){
	res.sendFile(__dirname+"/index.html");
console.log("服务器收到get请求");
});
app.post("/index.html",function(req,res){

console.log("书名："+req.body.bookname);
console.log("作者："+req.body.author);
console.log("价格："+req.body.price);

res.send("服务端已经成功收到数据")
})
app.listen(3000,'127.0.0.1',function(){
	console.log('启动服务器');
})