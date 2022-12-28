var input = document.getElementById("num");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");

var reset = document.getElementById("reset")

var p = document.getElementById("result");

btn1.onclick = function() {
    var a = input.value;
    var b = a / 2.54;
    b = b.toFixed(2);
    p.innerHTML = a + " centimeter equals " + b + " inches";
    p.style.color = "red"



}
btn2.onclick = function() {
    var a = input.value;
    var b = a / 100;
    b = b.toFixed(2);
    p.innerHTML = a + " centimeter equals  " + b + " meters";
    p.style.color = "orange";
}

btn3.onclick = function() {
    var a = input.value;
    b = a / 39.37;
    b = b.toFixed(2);
    p.innerHTML = a + " inch equals  " + b + " meters";
    p.style.color = "blue";
}

btn4.onclick = function() {
    var a = input.value;
    var b = a * 3.281
    b = b.toFixed(2);
    p.innerHTML = a + " meter equals  " + b + " feet";
    p.style.color = "magenta";
}
btn5.onclick = function() {
    var a = input.value;
    var b = a * 2.54;
    b = b.toFixed(2);
    p.innerHTML = a + " inch equals  " + b + " centimeters";
    p.style.color = "pink";
}
btn6.onclick = function() {
    var a = input.value;
    var b = a * 100;
    b = b.toFixed(2);
    p.innerHTML = a + " meter equals  " + b + " centimeters";
    p.style.color = "violet";
}

btn7.onclick = function() {
    var a = input.value;
    b = a * 39.37;
    b = b.toFixed(2);
    p.innerHTML = a + " meter equals  " + b + " inches";
    p.style.color = "black"
}
btn8.onclick = function() {
    var a = input.value;
    var b = a / 3.281;
    b = b.toFixed(2);
    p.innerHTML = a + " feet equals  " + b + " meters";
    p.style.color = "grey"
}

reset.onclick = function() {
    p.innerHTML = "";
}