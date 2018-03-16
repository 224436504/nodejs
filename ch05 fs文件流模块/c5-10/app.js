var fs=require("fs");
try{
	var fd=fs.openSync('./msg.txt','r');
	console.log(fd);
}catch(err){
	console.log(err);
}

