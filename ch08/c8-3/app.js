var mysql=require('mysql');
var client=mysql.createConnection({
	user:'mysqladmin',
	password:'123456',
	host:'localhost',
	port:3306,
	database:'nodejs'
});

client.connect(function  (err) {
	//判断是否连接到数据库
	if(err){
		throw err;
	}else{		
		queryData();
	}	
});

var queryData=function(){
			client.query('select *from book order by ID limit 0,2',function (err,results){
			if ( err ) {
				console.log(err);
			}else{
				// for (var i = results.length - 1; i >= 0; i--) {
				// 	console.log(results[i].bookname);
				//  };				
				results.forEach(function(e){
					console.log(e);
				})
				client.end(function(err){
					if (err) {
						console.log(err);
					}else{
						console.log("数据查询结束")
					}
				})

				
			}
		});	
}
client.on('error',function(err){
	if(err.code=='PROTOCOL_CONNECTION_LOST'){
		console.log('连接丢失')
	}else{
		console.log(err);
	}
	
})
