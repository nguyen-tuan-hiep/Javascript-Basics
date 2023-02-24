// Write a JavaScript program to find the area of a triangle given lengths of the three of its sides

let a, b, c;
document.getElementById('submitBtn').onclick = function(){
    a = Number(document.getElementById('aTextBox').value);
    b = Number(document.getElementById('bTextBox').value);
    c = Number(document.getElementById('cTextBox').value);
    half_perimeter = (a+b+c)/2;
    area = Math.sqrt(half_perimeter*(half_perimeter-a)*(half_perimeter-b)*(half_perimeter-c));
    a = a+1;
    document.getElementById('area').innerHTML = "Area of triangle is: " + area;
}
    
