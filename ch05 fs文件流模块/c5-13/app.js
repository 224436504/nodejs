var fs=require("fs");
fs.open("./msg.txt",'w',function(err,fd){
	if (err) {
		console.log("打开文件失败");
	}else{
		var buf =new Buffer("烟花三 月下扬州");
		fs.write(fd,buf,0,22,10,function(err,data,buffer){
			if (err) {
				console.log("文件写入失败");
			}else{
				 console.log("写入文件成功"+data);
			}
		});	

	}
}
)