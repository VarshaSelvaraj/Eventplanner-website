var http= require('http');
var url=require('url');
var querystring = require('querystring');

function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
    var u=querystring.parse(query)["us"];
    response.write('Hello '+u+', you have logged in successfully!');
   response.end();
}
http.createServer(onRequest).listen(6080);
console.log('Server has started...');
