exports.sbook_get=function(req,res){	
	res.render('sbook.ejs',{books:[],errMsg:''});
}
exports.sbook_post=function(req,res){	
	var d=domain.create();
	//异常处理
	d.on('error',function(err){
		res.render('sbook.ejs',{books:[],errMsg:err.message})				
	})
	d.run(function(){
		if(req.body.keyword){
		var  keyword=req.body.keyword;
		}	
		//连接数据库
		db.searchBook(keyword,function(){						
			res.render('sbook.ejs',{books:db.books,errMsg:''});						
			console.log(db.books);

			
		});
	})	
}
