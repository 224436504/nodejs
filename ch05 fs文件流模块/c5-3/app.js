var fs=require('fs');
fs.writeFile('./test2.txt',
	'去你妹的node,\r\n231111\r\n1616\r\n1321',
	function(err){
	if(err){
		console.log("文件写入失败!");
	}else{
		console.log("文件写入成功!");
	}
});


