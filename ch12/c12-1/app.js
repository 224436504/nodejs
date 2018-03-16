// Management Information System MIS;
//BookMIS
var app=require("express")();
var bodyParser=require('body-parser');
var serveStatic=require("serve-static");
var mysql=require('mysql');
var book=require('./lib/book');
domain=require('domain');
db=require('./lib/db');
pool=mysql.createPool({
	host:'localhost',
	port:'3306',
	database:'nodejs',
	user:'mysqladmin',
	password:'123456',	
});

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(serveStatic(__dirname+'/public'));

//处理客户端请求
app.get('/search',book.sbook_get);
app.post('/search',book.sbook_post);













app.listen(3333,function(){
	console.log('服务器启动...')
})



























