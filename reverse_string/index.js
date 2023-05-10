document.getElementById('myBtn').onclick = function(){
    let str = document.getElementById('myName').innerHTML;
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    document.getElementById('myName').innerHTML = reverseStr;
}

