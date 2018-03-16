var book=new Object();
book.name='三国';
book.author='罗贯中';
book.price=66;
book.show=function () {
	console.log('shuming:'+book.name);
	console.log('zuozhe:'+book.author);
	console.log('jiage:'+book.price);
};
book.show();