// Create a function called makeLoadedDie()
// which returns a function that when called,
// seems to generate random numbers between 1 and 6,
// but in fact returns numbers in a row from a hardcoded list.

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  i = 0

  return function() {
    var die = list[i];
    (i === list.length - 1) ? i = 0 : i++;
    return die;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


