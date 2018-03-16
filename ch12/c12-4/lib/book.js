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
//查找书籍
exports.ubook_update_get=function(req,res){
	var book_id=req.params.book_id;
	var keyword=req.params.keyword;
	var pno =req.params.pno;
	db.updateBook(book_id,function(){						
	res.render('ubook.ejs',{book:db.book,msg:"",keyword:keyword,pno:pno});
	});
	
}

exports.ubook_update_post=function(req,res){
	 var book={};	
	 book.ID=req.params.book_id;
	 book.bookname=req.body.bookName;
	 book.author=req.body.author;
	 book.price=req.body.price;
	var keyword=req.params.keyword;
	var pno =req.params.pno;
	 db.updateBook_2(book,function(){		
	res.render('ubook.ejs',{book:book,msg:db.msg,keyword:keyword,pno:pno});									
	});
	
}


exports.deletebook_get=function(req,res){	
	var id=req.params.book_id;
	var keyword=req.params.keyword;
	var pno =req.params.pno;
	db.deletebook(id,function(){
			db.searchBook(keyword,pno,function(){						
			res.render('sbook.ejs',{books:db.books,keyword:keyword,pno:db.pno,pageCount:db.pageCount,errMsg:''});		
			});
	});
}
	
exports.book_get=function(req,res){
	res.render("index.ejs",{});
}

exports.add_book_get=function(req,res){
	res.render("abook.ejs",{msg:"请填写书籍信息"});
}
exports.add_book_post=function(req,res){
		book={
		bookname:req.body.bookname,
		author:req.body.author,
		price:req.body.price
	}
	db.addbook(book,function(){		
		res.render('abook.ejs',{msg:db.msg});
	})
}
