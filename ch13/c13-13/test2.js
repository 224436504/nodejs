var fs=requrie('fs');
var out=fs.createWriteStream('./out.txt');
process.stdin.on('data',function(data){
	out.write(data);
	process.exit();
})
