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
		deleteData();
		
	}	
});
// 插入数据 insert into book (bookname,author,price) values("倚天屠龙记","金庸",45)
var insertData=function(){
	client.query('insert into book set ? ',{bookname:"倚天屠龙记",author:'金庸',price:45},function(err,results){
		if(err){
			console.log('数据传入失败'+err)
		}else{
			queryData("数据插入成功");
		}
	})
}
// 修改数据
var changeData=function(){
	client.query('update book set author=?,price=? where id=?',["曹雪芹 高鹗",666,1],function(err,results){
		if(err){
			console.log(err+"修改数据失败");
		}else{
			queryData("修改数据成功");
		}
	})
}
//删除数据 金_叹 _严格表示一个空位
var deleteData=function(){
	client.query('delete from book where author like ? ',["金_"],function(err,results){
		if(err){
			console.log("删除数据失败"+err)
		}else{
			queryData("删除数据成功");
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
						console.log(imformation)
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
