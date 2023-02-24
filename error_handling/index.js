try {
    alert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = 'Error: ' + err.message;
}

