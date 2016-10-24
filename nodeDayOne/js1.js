// This is for learnyounode part 1

// console.log("HELLO WORLD");


// This is for learnyounode part 2

// var sum = 0;
//
// for (var i = 2; i < process.argv.length; i++) {
//     var sum = sum + Number(process.argv[i]);
// }
// console.log(sum);

// This is for learnyounode part 3

// function doSomeStuff() {
//     const fs = require("fs");
//     var newString = fs.readFile(process.argv[2], "utf8");
//     var newArray = newString.split('\n');
//     var sum = 0;
//     for (i = 0; i < newArray.length - 1; i++) {
//         sum++;
//     }
//     return sum;
// }


// This is for learnyounode part 4

// const fs = require("fs");
//
// var path = process.argv[2];
//
// fs.readFile(path, "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data.split("\n").length - 1);
// });


// These are for part 1 luminosity
function getBright() {
    var luminosity = (0.2126) * process.argv[2] + (0.7152) * process.argv[3] + (0.0722) * process.argv[4];
    return luminosity
}


console.log(getBright());


function lightOrDark() {
    var luminosity = (0.2126) * process.argv[2] + (0.7152) * process.argv[3] + (0.0722) * process.argv[4];
    if (luminosity > 155) {
        return "light";
    } else {
        return "dark";
    }
}

console.log(lightOrDark());
