
var fs=require("fs");
fs.mkdir("./test",function(err){
	if (err) {
		console.log("创建文件夹失败");
	}
	else{
		console.log("创建文件夹成功");
	}
})