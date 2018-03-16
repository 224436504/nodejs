var mysql=require('mysql');
var client=mysql.createConnection({
	user:'mysqladmin',
	password:'123456',
	host:'localhost',
	port:3306,
	database:'nodejs'
});

client.connect(function  (err,results) {
	//判断是否连接到数据库
	if(err){
		throw err;
	}else{		
		console.log("连接成功");	
		client.end(function(err){
			if (err) {
				console.log('连接断开失败')
			}else{
				console.log('连接断开成功')
			}
		})	
	}
});


