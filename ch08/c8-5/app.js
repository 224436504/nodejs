var mysql=require('mysql');
var client=mysql.createConnection({
	user:'mysqladmin',
	password:'123456',
	host:'localhost',
	port:3306,
	database:'nodejs'
});

client.connect(function  (err) {
	//判断是否连接到数据库
	if(err){
		throw err;
	}else{		
		insertData();
	}	
});
// 插入数据 insert into book (bookname,author,price) values("倚天屠龙记","金庸",45)
var insertData=function(){
	client.query('insert into book set ? ',{bookname:"倚天屠龙记",author:'金庸',price:45},function(err,results){
		if(err){
			console.log('数据传入失败'+err)
		}else{
			console.log("新增行ID为:"+results.insertId);
			client.end(function(err){if (err) {}else{console.log('数据查询结束')});
		}
	})
}

//  查询数据
var queryData=function(){
			client.query('select *from book ',function (err,results){
			if ( err ) {
				console.log(err);
			}else{		
				results.forEach(function(e){
					console.log(e);
				})
				client.end(function(err){
					if (err) {
						console.log(err);
					}else{
						console.log("数据查询结束")
					}
				})

				
			}
		});	
}

//错误处理
client.on('error',function(err){
	if(err.code=='PROTOCOL_CONNECTION_LOST'){
		console.log('连接丢失')
	}else{
		console.log(err);
	}
	
})
