var fs=require('fs');
try{
var data=fs.readFileSync('./test2.txt',{encoding:'utf-8'});
console.log(data);
}
catch(ex){
	console.log("读取文件失败");
}