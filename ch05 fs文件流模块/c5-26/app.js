var fs=require("fs");
fs.unlinkSync("./msg.txt")
try{
	console.log("删除成功");
}
	
catch(ex){
	console.log("删除失败");
}