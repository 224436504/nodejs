 var showTime=function(req,res,next){
 	console.log("请求访问时间：",new Date().toLocaleString());
 	next();
 }
 exports.showTime=showTime;