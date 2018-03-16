var fs=require("fs");
var rs=fs.createReadStream('./msg.txt',{encoding:'utf8'});
var count=0;
rs.on('data',function(data){
	count++;
	console.log(data);
	console.log("----------------------");
	console.log("以上结果是第%d次读取的结果。",count);
	rs.pause();
	setTimeout(function(){
		rs.resume();
	},5000)
})
rs.on('end',function(){
	console.log("文件读取结束");
})
rs.on('err',function(err){
	console.log("文件读取出错");
})