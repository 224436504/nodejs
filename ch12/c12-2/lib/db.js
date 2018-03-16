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