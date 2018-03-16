var fs=require("fs");
 fs.renameSync("./msg.txt","./test/msg.txt")
try{
	console.log("移动文件成功");
}
catch(ex){
	console.log(err);
}
