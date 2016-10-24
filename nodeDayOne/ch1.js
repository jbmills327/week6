const fs = require("fs");

var targetFile = "output.txt";

var combined = [];

for (i = 2; i < process.argv.length; i++){
	combined.push(fs.readFileSync(process.argv[i], "utf8"));

}
fs.writeFileSync(targetFile, combined.join(""));
