var fs=require("fs");

try{

var file=fs.readdirSync('d:/');
	file.forEach(function(file)
	{
										console.log(file);
							});
}
catch(ex){
	console.log("读取目录失败");
}