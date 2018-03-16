var  http=require("http");
var options={
	hostname:'localhost',
	port:3333,
	path:'/',
	method:'get'
};
for(var i=0;i<30;i++){
	
	var req=http.request(options,function(res){
		res.on('data',function(data){
			console.log(data.toString())
		})
	});
	req.end();
}