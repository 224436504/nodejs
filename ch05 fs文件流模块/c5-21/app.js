var fs=require("fs");
fs.realpath("./msg.txt",function(err,rpath){
	if (err) {
		console.log("解析路径失败");
	}else{
		console.log("实际路径：%s",rpath);
	}
})