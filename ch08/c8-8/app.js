var mysql=require('mysql');
var client=mysql.createConnection({
	user:'mysqladmin',
	password:'123456',
	host:'localhost',
	port:3306,
	database:'nodejs',
	multipleStatements:true  //启用多条sql语句 默认false
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
	var sql="insert into book (bookname,author,price) values('边城','鲁迅',888);";
	sql+="insert into book (bookname,author,price) values('死亡笔记','不记得谁写的来着',111);";
	sql+="insert into book (bookname,author,price) values('JavaScript高级程序设计','bob',8888);";
	client.query(sql,function(err,results){
		if(err){
			console.log('数据传入失败'+err)
		}else{
			queryData("数据查询结束");
		}
	})
}

//  查询数据
var queryData=function(imformation){
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
					console.log(imformation);
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
