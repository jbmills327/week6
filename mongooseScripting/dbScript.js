var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/zoo", (err) => {
    if (err) {
        console.log("Error: ", err);
    } else {
        console.log("Connected to the database!");
    }
});

var newAnimals = [{
    name: "Elephant",
    diet: "People"
}, {
    name: "Donkey",
    diet: "Also People"
}, {
    name: "Peacock",
    diet: "You guessed it, people."
}];

var newVisitors = [{
    name: "Hector",
    favoriteAnimals: ["Puma", "Panther", "Duck"]
}, {
    name: "Samantha",
    favoriteAnimals: ["Salamander", "Newt", "Bunny"]
}, {
    name: "Peter",
    favoriteAnimals: ["Platypus", "One-Eyed Walrus", "Jackalope"]
}];



var animalsSchema = mongoose.Schema({
    name: String,
    diet: String,
});

var Animals = mongoose.model("Animals", animalsSchema);


var visitorsSchema = mongoose.Schema({
    name: String,
    favoriteAnimals: Array

});

var Visitors = mongoose.model("Visitors", visitorsSchema);

// function createVisitor(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var visitor = new Visitors(arr[i]);
//         console.log("New visitor: ", visitor);
//         visitor.save();
//     }
// }
//
// function createAnimals(arr) {
//     for (var i = 0; i <= arr.length; i++) {
//         var animal = new Animals(arr[i]);
//         console.log("New animal: ", animal);
//         animal.save();
//     }
// }
//
// createVisitor(newVisitors);
// createAnimals(newAnimals);


function getAnimals(query) {
    Animals.find(query || {}, (err, animal) => {
        if (err) {
            console.log("Error: ", err);
        } else {
            console.log("People: ", animal);
        }
    });
}

function getVisitors(query) {
    Visitors.find(query || {}, (err, visitor) => {
        if (err) {
            console.log("Error: ", err);
        } else {
            console.log("People: ", visitor);
        }
    });
}

getAnimals({
    diet: "People"
});

getVisitors({
    favoriteAnimals: "Jackalope"
})
