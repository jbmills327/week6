const fs = require("fs");
var anotherTarget = "output2.txt";
var newArray = [];

newArray.push(fs.readFileSync(process.argv[2], "utf8"));

fs.writeFileSync(anotherTarget, newArray.join(""));
