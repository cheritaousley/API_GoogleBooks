// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response) {
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    //---------------------this loads the root route or the homepage-----------------//
    if (request.url === '/') {
        fs.readFile('./index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
});