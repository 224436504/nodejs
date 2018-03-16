var url=require('url');
var urlObj=url.parse('http://127.0.0.1:3000/books/cn/findbook.html?id=1&type=novel');
 console.log('href:'+urlObj.href);
  console.log('protocol:'+urlObj.protocol);
  console.log('host:'+urlObj.host);
  console.log('hostname:'+urlObj.hostname);
    console.log('port:'+urlObj.port);
  console.log('pachname:'+urlObj.pathname);
    console.log('search:'+urlObj.search);
      console.log('path:'+urlObj.path);
        console.log('query:'+urlObj.query);

