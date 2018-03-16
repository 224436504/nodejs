var app=require("express")();
var serveStatic= require("serve-static");

//默认addbook.html
app.use("/addbook",serveStatic(__dirname,{"index":['addbook.html']}));
app.use(serveStatic(__dirname+"/public"));

app.listen(3333,function(){
	console.log('启动服务器');
})