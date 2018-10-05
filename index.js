var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html')
})
// app.get('/books', function (request, response) {
//     response.sendfile('books.html')
// })
app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'))
})
