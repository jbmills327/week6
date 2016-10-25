// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// calling fs and reading the content in data.txt. This is the process for doing it Synchronous instead of asynchronous
var fs = require("fs");
// var fileContents = fs.readFileSync("data.txt");

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
// We can access all files in the "public folder with this"
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.use(express.static(__dirname + '/public'));

// Routes \\


// app.get('/', function(req, res) {
// res.send('Hello')

// This is set to output the data in data.txt.  Serving up a static file
// res.header("Content-Type", "text/html");
// res.send(fileContents);

// This is how it is done asynchronously
// fs.readFile("data.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log("An error has occured, please try again.");
//     }
//     res.header("Content-Type", "text/html");
//     res.send(data);
// })
// });





// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function() {
    console.log('Server running on port ' + port);

})
