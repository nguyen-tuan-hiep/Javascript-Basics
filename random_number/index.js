// get a random integer on [min, max] interval
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
let a = getRndInteger(1,4);
console.log(a);
