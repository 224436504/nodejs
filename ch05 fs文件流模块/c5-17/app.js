var fs=require("fs");
fs.readdir('d:/',function(err,file){
	if (err) {
		console.log("读取目录失败");
	}else{
		console.log("读取目录成功");
/*		for (var i = file.length - 1; i >= 0; i--) {
					console.log(file[i]+i);
							};*/
		file.forEach(function(file){
					console.log(file);
		})

	}
})