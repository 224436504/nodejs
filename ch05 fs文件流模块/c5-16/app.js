var fs=require("fs");

try{
	fs.mkdirSync("./test1");
	console.log("文件夹创建成功");

}
catch(ex){
	console.log("文件夹创建失败");
	console.log(ex);
}
