// 1. Write a JavaScript program to display the current day and time in the following format
// Sample Output : 
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
let date = new Date().toLocaleString('en-us', {  weekday: 'long' })
console.log("Today is : " + date);

let hour = new Date().toLocaleString('en-us', {  hour: 'numeric', hour12: true })
let minute = new Date().toLocaleString('en-us', {  minute: 'numeric' })
let second = new Date().toLocaleString('en-us', {  second: 'numeric' })
console.log('Current time is : ' + hour + ' : ' + minute + ' : ' + second);
// We can return the day of the week as a number from 0 to 6. 0 is for Sunday, 1 is for Monday, 2 is for Tuesday, and so on.
// let dates = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let date = new Date();
// console.log("Today is : " + dates[date.getDay()]);