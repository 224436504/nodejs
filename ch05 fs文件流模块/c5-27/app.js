var fs=require("fs");
fs.rmdir("./test",function(err){
	if (err) {
		console.log("删除出错");
	}
	else{
		console.log("删除成功")
	}
})