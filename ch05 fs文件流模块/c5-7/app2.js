var fs =require('fs');
fs.appendFile("./msg.txt",'总是要创建文件夹',function(err){
			if (err) {
				console.log('文件追加失败!');
				console.log(err);
			}else{
				console.log('文件追加成功!');

			}

		}
	);