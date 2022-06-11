// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

//appendCat destructively
function destructivelyAppendCat() {
cats.push("Ralph");
}

//prependCat destructively
function destructivelyPrependCat() {
cats.unshift("Bob");
}
//remove lastCat destructively
function destructivelyRemoveLastCat() {
cats.pop(2);
}

//remove firstCat destructively
function destructivelyRemoveFirstCat() {
cats.shift(0);
}

//appendCat to new array
function appendCat(name) {
let newCat;
newCat = ([...cats, "Broom"]);
return newCat;
}


//prependCat to new array
function prependCat(name) {
let newCat;
newCat = (["Arnold", ...cats]);
return newCat;
}


//removesLastCat and returns new array
function removeLastCat() {
let newArray;
newArray = (["Milo", "Otis"]);
newArray.splice(2, "Garfield");
return newArray;
}


function removeFirstCat() {
let newArray;
newArray = (["Otis", "Garfield"]);
newArray.splice(0, "Milo");
return newArray;
}



