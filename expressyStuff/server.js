// This is the minimum to setup an HTTP server

const express = require("express");


var app = express();

var PORT = process.env.PORT || 8080;


app.get("/about.html", (req, res) => {
    // res.send("<h1> Hello World </h1>");
    res.sendFile(__dirname + "/about.html");
    // Server side console is in the terminal.  This doesn't show up in the dev tools console
    console.log("Here I am");
})

app.use(express.static("public"));

// Setting up a listener
app.listen(PORT, (err) => {
    if (err) {
        console.log("Server Error", err);
        process.exit(1);
    };
    console.log("Server is up and running listening to port " + PORT)

})
