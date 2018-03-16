var fs=require('fs');
fs.readFile('./picture.jpg',{encoding:'base64'},function(err,data){
	if(err){
		console.log('文件读取失败！');
	}else{
		fs.writeFile('./cope.jpg',data,{encoding:'base64'},function(err){
			if(err){
				console.log('文件复制失败！')
			}else{
				console.log('文件复制成功！');
			}
		})
		
	}
})
