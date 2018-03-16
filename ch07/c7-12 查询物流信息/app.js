var http=require('http');
var req=http.get('http://www.kuaidi100.com/query?type=zhongtong&postid=440816976426',function(res){
	res.setEncoding('utf-8');
	var rawData='';
	res.on('data',function(data){
		rawData+=data;
	})
	res.on('end',function(){
		try{
			var parseData=JSON.parse(rawData);
			console.log(parseData);
		}catch(ex){
			console.log(ex);
		}
	})
})
//全峰 汇通 加上kuaidi
//德邦 加上wuliu