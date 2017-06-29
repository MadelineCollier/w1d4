// Implement your own version of the built-in array map function.

// Yours will take in two arguments.
// The first will be an array to map and
// the second will be a callback function.
// The function will return a new array
// the new array will be based on the results of the callback function.


var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {return word.length});

//  the above ^ should return [6, 7, 2, 5, 3]



function map (array, callback) {
  var newArray = [];
  array.forEach(function(wordOnList) {
    newArray.push(callback(wordOnList));
  })
  return newArray;
}