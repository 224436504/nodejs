var fs=require("fs");
fs.rmdirSync("./test")

try{
	console.log("删除成功");

}
catch(ex){
	console.log(ex);
}