exports.findbooks_get=function(req,res){

	
	res.render("findbooks.ejs",{title:"查找书籍"});
}


exports.findbooks_post=function(req,res){
	var keyword=req.body.keyword;
	if(req.body.keyword){
		//有关键字则连接数据库查找
		pool.getConnection(function(err,connection){
			if(err){
				connection.release();
				console.log("与mysql数据库连接失败");
			}else{
				console.log("与mysql数据库连接成功");
				var sql="select * from book where bookname like '%"+keyword+"%' or author like '%"+keyword+"%' order by id asc ";
				
				connection.query(sql,keyword,function(err,result){
					if(err){
						console.log(err);
					}else{
						console.log(result);
						res.render("findresults.ejs",{books:result});
					}
				})							
			}
			
			
		});		
		
	}else{
		
		res.end("你说自己做错了什么!")
	}
}

