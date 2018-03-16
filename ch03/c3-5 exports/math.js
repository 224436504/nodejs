/*var show=function(){
	console.log('老铁');
};*/
//表示被导出
var zhouchang=function(w,h){
	return "矩形的周长:"+2*(w+h);
};
var mianji=function(w,h){
	return "矩形的面积:"+w*h;
};
/*exports.show=show;*/
exports.zhouchang=zhouchang;
exports.mianji=mianji;

var circle_zhouchang=function(r){
	return "圆的周长:"+2*r*Math.PI;
}
var circle_mianji=function(r){
	return "圆的面积:"+Math.PI*(r^2);
}
exports.circle_zhouchang=circle_zhouchang;
exports.circle_mianji=circle_mianji;