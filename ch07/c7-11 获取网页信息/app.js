
var http=require('http');
var option={
	hostname:'www.baidu.com',
	port:80,
	path:'/',
	method:"GET"
};
var req=http.request(option,function(res) {
	//console.log("231");
		console.log(res.statusCode);
		res.on('data',function(data){
			console.log(data.toString());
		})

});
req.end();