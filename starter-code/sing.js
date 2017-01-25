console.log("sing.js loaded");

var bottles = prompt("How drunk you gon' get!? \n enter a number, fool", 5);

for (var i=bottles; i>=0; i--){
  if (i > 1){
    console.log([i] + " bottles of beer on the wall!");
    console.log([i] + " bottles of beer!");
    console.log("Take one down, pass it around!");
    console.log([i] + " bottles of beer on the wall!")
  } else if (i === 1){
    console.log("One more bottle of beer on the wall!");
    console.log("One more bottle of beer!");
    console.log("Take it down, pass it around!");
    console.log("No more bottles of beer on the wall!")
  } else {
    console.log("No more bottles of beer on the wall!");
    console.log("No more bottles of beer!");
    console.log("No more to take down and pass all around!");
    console.log("No more bottles of beer on the wall!");
  }
}
