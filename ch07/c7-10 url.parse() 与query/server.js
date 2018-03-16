var url=require('url');
var http=require('http');
var server=http.createServer();
server.on('request',function(req,res){
console.log("浏览器发来一次请求");
var urlObj=url.parse(req.url);
console.log(urlObj.query);//字符串返回 id=1&author=abc
var urlObj2=url.parse(req.url,true)
console.log(urlObj2.query);//对象返回 true会将query转换成对象返回 { id: '1', author: 'abc' }
//    http://127.0.0.1:3000/findbook.js?id=1&author=abc 
});


server.listen(3000,'127.0.0.1');