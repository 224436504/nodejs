var multer=require("multer");
var app=require("express")();
//定义上传位置
var storage=multer.diskStorage({
	 //设置上传后文件路径，uploads文件夹会自动创建。
	destination:function(req, file, cb){
		 cb(null, __dirname+'/uploads');
	},
	 //给上传文件重命名，获取添加后缀名
      filename: function (req, file, cb) {
      	var pos=file.originalname.lastIndexOf(".");//获得最后一个“.”的位置
      	var ext=file.originalname.substring(pos);//得到拓展名 包括“.”;
        cb(null, file.fieldname + '-' + Date.now() + ext);//filedname 为input框中的name
      }
});
//限制文件上传的类型
var fileFilter=function(req, file, cb){
	var pos=file.originalname.lastIndexOf(".");//获得最后一个“.”的位置
    var ext=file.originalname.substring(pos);//得到拓展名 包括“.”;
    if(ext==".jpg"||ext==".doc"){
    	cb(null,true);//true 表示允许上传
    }else{
    	cb(new Error("文件格式不正确，只能上传.jpg或.doc文件"));
    }
};
//限制上传文件的大小
var limits={fileSize:10*1024*1024};
// 写入上传的参数
var m=multer({storage:storage,fileFilter:fileFilter,limits:limits});

app.get("/index.html",function(req,res){
	res.sendFile(__dirname+'/index.html');

})
var upload=m.array('file',5);
app.post("/index.html",function(req,res){
	//开始上传
	upload(req,res,function(err){
		if(err){
			console.log("上传失败")
		}else{
			for(var i=0;i<req.files.length;i++){
				console.log(req.files[i]);
			}
			res.send("上传成功")
		}
	})
});
app.listen(3001,"127.0.0.1",function(){
	console.log("服务器启动....")
})