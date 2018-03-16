var fs=require('fs');
fs.writeFile('./test2.txt',
	'远方除了诗意\r\n还有现实的骨干',
	{flag:'a'},
	function(err){
	if(err){
		console.log("文件追加失败!");
	}else{
		console.log("文件追加成功!");
	}
});