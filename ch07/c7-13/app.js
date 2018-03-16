var http=require('http');
var options={
	hostname:'127.0.0.1',
	port:3000,
	path:'/',
	method:'post'
}
var req=http.request(options);

req.on('response',function(res){
	res.on('data',function(data){
		console.log(data.toString());
	})
})
req.write('开始');
req.end('结束');