var fs=require("fs");
//fs.rename("./msg.txt","./msg1.txt")
fs.rename("./msg.txt","./test/msg.txt",function(err){
	if (err) {
		console.log(err);
	}
	else{
		console.log("移动文件成功");
	}
})
//rename在当前文件夹下进行文件的移动或者重命名