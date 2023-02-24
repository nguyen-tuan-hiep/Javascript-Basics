//The JavaScript for-in statement loops through the properties of an Object:

/*
The for-in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value
The value of the key is person[x]
*/
const person = {fname:"Tuan", lname:"Hiep", age:20};

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);


// The JavaScript for-in statement can also loop over the properties of an Array:

const numbers = [10,20,30,40];
let sum = 0;
for(let i in numbers){
    sum += numbers[i];  
}
console.log(sum);

/*
Do not use for in over an Array if the index order is important.
The index order is implementation-dependent, and array values may not be accessed in the order you expect.
It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
*/