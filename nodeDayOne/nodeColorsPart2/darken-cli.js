// required colorutil.js
var makeItDark = require("./colorutil.js");
// This is used to call the darker method from colorutil
var darkenItUp = makeItDark.darker();

console.log(darkenItUp);
