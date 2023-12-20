var posel = document.getElementsByTagName('ul')[0];

var lel = document.createElement('li');
var leltext = document.createTextNode('Pineapple');
lel.appendChild(leltext);
posel.appendChild(lel);


var fel = document.createElement('li');
var feltext = document.createTextNode('Cream');
fel.appendChild(feltext);
posel.insertBefore(fel,posel.firstChild);

var list = document.getElementsByTagName('li');
if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
        list[i].className = "cool";
    }
}

var header = document.getElementById('tite');
var textval = header.firstChild.nodeValue
var salida = textval + ':' + '<em>' + list.length + '</em>';
header.textContent = salida;

