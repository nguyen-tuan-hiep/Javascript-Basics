function toCelsius(x){
    return (x-32) * 5/9;
}

function toFahrenheit(x){
    return x * 9/5 + 32;
}

document.getElementById('myBtn').onclick = function(){
    if(document.getElementById('mySelect').value == 'celsius'){
        let x = Number(document.getElementById('myInput').value);
        x = toCelsius(x).toFixed(2);;
        document.getElementById('result').innerHTML = "The temperature is " + x + '°C';
    }
    else if(document.getElementById('mySelect').value == 'fahrenheit'){
        let x = Number(document.getElementById('myInput').value);
        x = toFahrenheit(x).toFixed(2);;
        document.getElementById('result').innerHTML = "The temperature is " + x + '°F';
    }
};