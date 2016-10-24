const http = require("http");
const fs = require("fs");
http.createServer(function(req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {
            "Content-Type": "text/html",
            'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}).listen(1337, "127.0.0.1", () => {
    console.log("Server is running at 127.0.0.1 port 1337");

});
