var fs=require("fs");
var rs=fs.createReadStream('./msg.txt',{encoding:'utf8'});//创建一个可读流
rs.on('open',function(fd){  //文件一打开触发open事件
		console.log('文件打开');

});
//可能会多次打开data
rs.on('data',function(data){
 console.log(data);
})
//内容读取结束触发end事件
rs.on('end',function(){
	console.log('读取结束');
})

rs.on('close',function(){
	console.log('文件关闭');
})
rs.on('err',function(err){
	console.log(err);
})



