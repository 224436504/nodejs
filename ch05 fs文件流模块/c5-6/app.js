var fs=require("fs");
try{
	fs.writeFileSync('./test.txt',
	'你站在墙上看风景\r\n看风景的人在桥上看你')
	console.log("写文件成功");
}

catch(ex){
	console.log("写文件失败!");
}

	/*if (err) {
		console.log("文件读取失败!");
	}
	else{
		fs.writeFile('./c.jpg',data,{encoding:base64},function(err){
		if(err){
			console.log("文件复制失败!");
		}else{
			console.log("文件复制成功!");
		}
		});
	}

});*/