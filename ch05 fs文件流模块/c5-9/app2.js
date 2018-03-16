var fs =require("fs");
fs.open('./msg.txt','r',function(err,fd){
	if (err) {
		console.log("文件打开出错");
	}else{
		console.log('文件描述：%d',fd)
	}
})