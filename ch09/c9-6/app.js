var mw=require("./middleware.js")

var app = require('express')();//创建一个express 对象
app.use(mw.showTime);
app.get('/', function (req, res) {
  	res.send('fuck the World again!');
  	//send 函数只能调用一次 而write 能够多次调用
});

var server = app.listen(3000, 'localhost',function () {
 
  console.log('Example app listening at http://%s:%s');
});

//
