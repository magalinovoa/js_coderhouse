const actual = 2021;

var nombre = prompt('¿Cómo es tu nombre?');

while (nombre == '') { alert('¡Completa tu nombre!'); var nombre = prompt('¿Cómo es tu nombre?');}

var año = parseInt(prompt('¿En qué año naciste?'));

while (isNaN(año)) { alert('¡Completa tu año de nacimiento!'); var año = parseInt(prompt('¿En qué año naciste?'));}

alert ('Tu nombre es ' + nombre + ' y naciste en el año ' + año );

let resultado = actual - año;

if (resultado < 18) {alert('¡Hola, ' + nombre + '!' + ' Tenes ' + resultado + ' años. Eso singifica que sos menor de edad.');}
else (resultado >= 18); {alert('¡Hola, ' + nombre + '!' + ' Tenes ' + resultado + ' años. Eso significa que sos mayor de edad.');}