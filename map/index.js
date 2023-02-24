// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

console.log(fruits.get('apples'));
console.log("Before deleting, fruit.size = " + fruits.size);

fruits.delete("apples");
console.log("After deleting, fruit.size =  " + fruits.size);




// Another way to create a Map
const fruits2 = new Map();

// Set Map Values
fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);
console.log(fruits2.get('apples'));