// I used require to pass my directory as a dependency
var colorUtil = require("./colorutil.js");

var digits = colorUtil.giveMeTheNumber();
var allTheColors = colorUtil.luminosity();


console.log(digits);
console.log(allTheColors);
