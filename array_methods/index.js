const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById('demo').innerHTML = fruits.toString();
document.getElementById('demo').innerHTML = fruits.join(" & ");
fruit = fruits.pop();   // remove the last element from the array
document.getElementById('demo').innerHTML = fruits.join(" & ");
document.getElementById('demo').innerHTML = fruit;

fruits.push("Kiwi");    // add a new element to the end of the array
document.getElementById('demo').innerHTML = fruits.join(" & ");

fruits.unshift("Lemon");    // add a new element to the beginning of the array
document.getElementById("demo").innerHTML = fruits;

fruits.shift();     // remove the first element from the array
document.getElementById("demo").innerHTML = fruits;

//change element
fruits[0] = "Kiwi";
document.getElementById("demo").innerHTML = fruits;