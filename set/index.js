const letters = new Set(["a","b","c"]);

letters.add("d");
letters.add("e");

console.log(letters);
letters.add("a");
letters.delete("b");
console.log(letters);


let text = "";
letters.forEach (function(value) {
    text += value;
})

console.log(text);
console.log(letters.has('a'));   // return true if 'a' is in the set, else return false     
console.log(letters.size);      //length of letters