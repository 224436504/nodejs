var fs=require("fs");
fs.open("./msg.txt",'w',function(err,fd){
	if (err) {
		console.log("打开文件失败");
	}else{
		var buf =new Buffer("烟花三 月下扬州");
		
		try{
			var written=fs.writeSync(fd,buf,0,22,10);
			console.log("写入文件成功");

		}
		catch(ex){
			console.log("文件写入失败");
		}
/*		fs.close(fd,function(err){
			if (err) {
				console.log("关闭文件失败");
			}
			else{
				console.log("关闭文件成功");
			}
		})*/
	try{
		fs.closeSync(fd);
		console.log("关闭文件成功");
	}
	catch(ex){
	}
	console.log("关闭文件失败");

	}
}
)