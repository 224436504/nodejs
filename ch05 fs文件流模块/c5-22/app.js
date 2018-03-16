var fs=require("fs");
rpath=fs.realpathSync("./msg.txt");
try{
	console.log("实际路径：%s",rpath);
}
catch(ex){
	console.log("解析路径失败");
}