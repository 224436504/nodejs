var fs=require("fs");
//fs.readFile('./test.txt',{encoding:'utf-8'},function(err,data)
fs.readFile('./test2.txt',{encoding:'utf-8'},function(err,data){
	if (err) {
		console.log("文件读取失败!");
	}
	else{
		console.log(data);
	}

});
/*console.log("服务加载中");*/