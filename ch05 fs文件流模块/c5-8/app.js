var fs=require("fs");
try{
	fs.appendFileSync('./msg1.txt','一直加');
	console.log("文件追加成功");
}
catch(ex){
console.log(ex);
}

