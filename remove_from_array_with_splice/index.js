const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.splice(0, 2);
document.getElementById("demo2").innerHTML = fruits;
/*
The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (2) defines how many elements should be removed. (from the beginning)

The rest of the parameters are omitted. No new elements will be added.
*/