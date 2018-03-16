var fs=require("fs");
fs.stat('./msg.txt',function(err,stat){
	if (err) {
		console.log(err);
	}else{
		console.log("文件大小:",stat.size);
		console.log("文件的修改时间",stat.ctime.toLocaleString());
		console.log("文件状态的修改时间",stat.birthtime.toLocaleString());
		console.log("文件内容的修改时间",stat.mtime.toLocaleString());
		console.log("文件的访问时间",stat.atime.toLocaleString());
		console.log("文件？"+stat.isFile())
		console.log("文件？"+stat.isDirectory())
	}
})