const arr = [5,3,8,1,10,2,100];

document.getElementById('myArray').innerHTML = 'Before:\t' +  arr;

document.getElementById('myBtn').onclick = function(){
    // By default, the sort() function sorts values as strings.
    // Because of this, the sort() method will produce incorrect result when sorting numbers.
    // You can fix this by providing a compare function
    arr.sort(function(a, b){return a - b});
    document.getElementById('after').innerHTML = 'After:\t' + arr
}