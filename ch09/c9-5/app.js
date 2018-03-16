var app = require('express')();//创建一个express 对象

var myfun1=function(req,res,next ){
	console.log("已经进去到myfun1函数");
	next();//传递关系的标识符 
}
app.use(myfun1);
var myfun2=function(req,res,next ){
	console.log("已经进去到myfun2函数");
	next();
}
app.use(myfun2);

app.get('/', function (req, res) {
	console.log("已经进去到get函数");
  	res.send('fuck the World again!');
  	//send 函数只能调用一次 而write 能够多次调用
});

var server = app.listen(3000, 'localhost',function () {
 
  console.log('Example app listening at http://%s:%s');
});

//
