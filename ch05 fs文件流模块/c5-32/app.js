var fs=require("fs");
var rs=fs.createReadStream('./msg.txt',{encoding:'utf8'});
var ws=fs.createWriteStream('./msg2.txt',{encoding:'utf8'});
rs.on('data',function(data){
	ws.write(data);
	console.log("拿到数据了")
});
/*rs.on('open',function(){
	console.log("源文件打开");
})*/
rs.on('close',function(){
	console.log("源文件关闭");

})
rs.on('end',function(){
	ws.end('再见',function(){
		console.log("目标文件读取结束");
	})

})
ws.on('open',function(){
	console.log("目标文件打开");
});
ws.on('close',function(){
	console.log("目标文件关闭");
});