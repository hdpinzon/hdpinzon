
var number, operator, msg;
number = 5;
operator = "*";
msg = '';
for (let i = 1; i < 11; i++) {
    if (operator == "*") {
        res = i * number;
    }
    else if (operator == "+") {
        res = i + number;
    }
    //msg = '<h3>' + i + ' ' + operator + ' ' + number + ' = ' + res  + '<h2>';
    msg += i + ' ' + operator + ' ' + number + ' = ' + res  + '<br />';
    //document.write(msg)
}
var salida = document.getElementById("blackboard").firstChild.nodeValue = "Hello God";
//salida.innerHTML= msg
//var el = salida.firstChild.nodeValue;
//el = el.replace('Prueba','Otro');
//salida.firstChild.nodeValue = "Hello World";
