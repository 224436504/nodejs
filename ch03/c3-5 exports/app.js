var Math=require('./node_modules/math.js');
/*	node_modules下的文件不用再写路径
	即未写路径时 
	会直接在node_modules中打开文件
	var Math=require('math');
*/
var w=20,h=10;
var zhouchang=Math.zhouchang(w,h);
var mianji=Math.mianji(w,h);
console.log(zhouchang);
console.log(mianji);
var r=20;
var circle_zhouchang=Math.circle_zhouchang(r);
var circle_mianji=Math.circle_mianji(r);
console.log(circle_zhouchang);
console.log(circle_mianji);