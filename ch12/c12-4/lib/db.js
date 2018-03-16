var searchBook=function(keyword,pno,callback){
		pool.getConnection(function(err,connection){
		if(err){
			console.log("与mysql数据库连接失败"+err);
		}else{			
			//计算总页数
			var pageSize=3;
			var str="select count(*) as num from book where bookname like '%"
			+keyword+"%' or author like '%"+keyword+"%'";
			connection.query(str,function(err,results){
				if(err){
					console.log(err);
				}else{
					var pageCount=Math.ceil(results[0].num/pageSize);//向上取整					
					if(pageCount>0){
						exports.pno=1;
					}else{
						exports.pno=0;
					}
					exports.pageCount=pageCount;
				}
			})
			//获得结果
			var start=pageSize*(pno-1);			
			var sql="select * from  book where bookname like '%"
			+keyword+"%' or author like '%"+keyword+"%' limit "+start+","+pageSize;						
			connection.query(sql,function(err,results){
				if(err){
					console.log(err);
				}else{
					exports.books=results;
					callback();
				}
				
			})
		}
	})
}

exports.searchBook=searchBook;
//根据id字段查找对应书籍信息
var updateBook=function(id,callback){
	pool.getConnection(function(err,connection){
		if(err){
			console.log("与mysql数据库连接失败"+err);
		}else{
			var sql='select * from book where id=?';
			connection.query(sql,id,function(err,results){
				if(err){
					console.log(err);
				}else{
					exports.book=results[0];
					callback();
				}
				
			})
		}
	})
		
}
exports.updateBook=updateBook;

//更新书籍信息
var updateBook_2=function(book,callback){
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err);
			exports.msg="与数据库连接失败！";
		}else{
			var str="update book set bookname=?,author=?,price=? where id=?";
			var arr=[book.bookname,book.author,book.price,book.ID];
			connection.query(str,arr,function(err,results){
				if(err){
					console.log(err);
					exports.msg='更新书籍数据失败!';
				}else{
					exports.msg="更新书籍数据成功!";
					callback();
				}
			})
		}
	})
}
exports.updateBook_2=updateBook_2;

//删除书籍
var deletebook=function(id,callback){
	pool.getConnection(function(err,conneciton){
		if(err){
			console.log(err);
			exports.msg="与数据库连接失败！";
		}else{
			conneciton.query("delete from book where id=?",id,function(err,result){
				if(err){ 
					console.log(err);
					exports.msg="删除书籍失败！";
				}else{
					exports.msg="删除书籍成功！";
					callback();
				}
				
			})
		}
	})
}
exports.deletebook=deletebook;


//添加书籍
var addbook=function(book,callback){
	pool.getConnection(function(err,connection){
		if(err){			
			console.log(err);
			exports.msg="与数据库连接失败！";
		}else{
			connection.query("insert into book set ?",book,function(err){
				if(err){
					exports.msg="添加书籍失败!";
				}else{
					exports.msg="添加书籍成功！";
					callback();
				}
			})
		}				
	})
}
exports.addbook=addbook;

