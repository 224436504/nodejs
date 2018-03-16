exports.sbook_get=function(req,res){	
	res.render('sbook.ejs',{books:[],keyword:"",errMsg:'',pno:0,pageCount:0});
}
exports.sbook_paging=function(req,res){
	var d=domain.create();
	d.on('error',function(err){
		console.log(err);
	});
	d.run(function(){
		var keyword=req.params.keyword;
		var pno=req.params.pno;//页码
		db.searchBook(keyword,pno,function(){						
			res.render('sbook.ejs',{books:db.books,keyword:keyword,pno:pno,pageCount:db.pageCount,errMsg:''});						
			console.log(db.books);			
		});
	});
}


exports.sbook_post=function(req,res){	
	var d=domain.create();
	//异常处理
	d.on('error',function(err){
		res.render('sbook.ejs',{books:[],keyword:keyword,errMsg:err.message,pno:0,pageCount:0})				
	})
	d.run(function(){
		if(req.body.keyword){
		var keyword=req.body.keyword;
		if(req.body.pno){
			var pno=req.body.pno;
		}else{
			var pno =1;
		}
		//连接数据库
		db.searchBook(keyword,pno,function(){						
			res.render('sbook.ejs',{books:db.books,keyword:keyword,pno:db.pno,pageCount:db.pageCount,errMsg:''});						
			console.log(db.books);			
		});
		}
		
		
	})	
}
