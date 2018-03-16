var fs=require("fs");
var stat=fs.statSync('./msg.txt')

try{
		console.log("文件大小:",stat.size);
		console.log("文件的创建时间",stat.ctime.toLocaleString());
		console.log("文件的修改时间",stat.mtime.toLocaleString());
		console.log("文件的访问时间",stat.atime.toLocaleString());
		console.log("文件？"+stat.isFile())
		console.log("文件？"+stat.isDirectory())
}
catch(ex)	
{console.log(ex);}
