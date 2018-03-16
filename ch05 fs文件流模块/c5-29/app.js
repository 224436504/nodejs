/*var fs=require("fs");
var Loop=function(path){
	try{
		//刪除当前目录下的所有文档
		var files=fs.readdirSync(path);
			for(let i=0;i<files.length;i++){
				var stats=fs.statSync(path+'/'+files[i]);
				if (stats.isFile()) {
					fs.unlinkSync(path +"/"+files[i]);
					console.log("0");
				}
				//a如果是目录则递归
				if (stats.isDirectroy()){
						Loop(path);
						console.log("目录删除成功");
					}							
			}	
		fs.rmdirSync(path);
	}
	catch(ex){
		console.log("目录删除失败");
	}
};
Loop("./test");*/




// var fs=require('fs');
// var removePath=function(path){
// 		try{
// 		//删除当前目录下所有文件
// 		var files=fs.readdirSync(path);
// 		for(let i=0;i<files.length;i++){
// 			//console.log(path+'/'+files[i]);
// 			var stats=fs.statSync(path+'/'+files[i]);
// 			//如果是文件 删除
// 			if(stats.isFile()){
// 				fs.unlinkSync(path+'/'+files[i]);
// 			}
// 			//如果是目录 这样办 递归
// 			if(stats.isDirectory()){
// 				removePath(path+'/'+files[i]);
// 			}
// 			//删除当前目录
// 			fs.unlinkSync(path+'/'+files[i]);
// 		}
// 		fs.rmdirSync(path);
// 		console.log('目录删除成功');
// 	}
// 	catch(ex){
// 		console.log('目录删除失败');
// 	}
// };
// removePath('./text');



var fs=require("fs");
var Loop=function(path){
	try{
	var files=fs.readdirSync(path);
		for(let i=0;i<files.length;i++){
			var stats=fs.statSync(path+"/"+files[i]);
			if (stats.isFile()){
				fs.unlinkSync(path+"/"+files[i]);
			};
			if (stats.isDirectory()){		
				Loop(path+"/"+files[i]);
				console.log("删除文件成功");
			};
			fs.unlinkSync(path+'/'+files[i]);
		}
		fs.rmdirSync(path);	
	}
	catch(ex){
		console.log("删除文件失败"+ex)
	}

}
Loop("./test");


