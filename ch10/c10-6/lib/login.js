exports.index_get=function(req,res){
	res.render('index.ejs',{});
}
exports.check_post=function(req,res){
	var d=domain.create();
	
	
	d.on('error',function(err){
		console.log("客户端请求时发生以下错误"+err.message);
	});
	
	d.run(function(){
		var obj={};
		if(req.body.user){
			obj.user=req.body.user;
		}
		if(req.body.pass){
			obj.pass=req.body.pass;
		}
		res.render('welcome.ejs',{obj:obj});
	});
	
	
	
	
}




