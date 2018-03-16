
exports.login_get=function(req,res){
	if(req.session.user){
		res.render('welcome.ejs',{user:req.session.user})
	}else{
		if(req.cookies.user){
			req.session.user=req.cookie.user;
			res.render('welcome.ejs',{user:req.session.user})
		}else{
			res.render('login.ejs',{title:"EJS登录窗口",msg:"准备登录"});	
		}
	}	
};


exports.login_post=function(req,res){
	var user= req.body.user;
	var pass= req.body.pass;
	//var user=basicAuth(req);
	pool.getConnection(function(err,connection){
	if(err){
		connection.release();
		console.log("与mysql数据库连接失败");
	}else{
		console.log("与mysql数据库连接成功");
		connection.query('select count(*) as num from users where user=? and pass=?',
			[user,pass],
			function(err,result){
			if(err){
				res.set("WWW-Authenticate","Basic real=Please enter user&pass!");
				return res.sendStatus(401);
			}else{
				console.log("登录成功");
				if (result[0].num>0) {
					if(req.body.nologin=="on"){
						res.cookie("user",user,{maxAge:1000*3600*24*7})
					}else{
						req.session.user=user;
					res.render("welcome.ejs",{user:req.session.user});	
					}
														
				}else{
					res.render('login.ejs',{title:"EJS登录窗口",msg:"用户名或密码输入错误"})
					
				}
			
			}
			
			})
		}
	
	});

};

exports.reset_post=function(req,res){
	res.clearCookie("user");
	req.session.destroy(function(err){
		
	});
	res.redirect("/");
	
};