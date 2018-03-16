var fs=require('fs');
fs.writeFile("./msg.txt",'总是要创建文件夹',
		{flag:'a'},function(err){
			if (err) {
				console.log('文件追加失败!');
			}else{
				console.log('文件追加成功!');

			}

		})


