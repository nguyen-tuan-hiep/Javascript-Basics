const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = "Original Array:<br> " + fruits;
let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
/* 
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (2) defines how many elements should be removed. (remove from the last)
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*/
document.getElementById("demo2").innerHTML = "New Array:<br>" + fruits;
document.getElementById("demo3").innerHTML = "Removed Items:<br> " + removed; 