var searchBook=function(keyword,callback){
		pool.getConnection(function(err,connection){
		if(err){
			console.log("与mysql数据库连接失败"+err);
		}else{
			var sql="select * from  book where bookname like '%"
			+keyword+"%' or author like '%"+keyword+"%'";
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