const actual = 2021;

var nombre = prompt('¿Cómo es tu nombre?');

if (nombre == '') { alert('¡Completa tu nombre!'); var nombre = prompt('¿Cómo es tu nombre?');}
else {alert('Muy bien, completaste el dato en el primer intento')}

var año = parseInt(prompt('¿En qué año naciste?'));

if (isNaN(año)) { alert('¡Completa tu año de nacimiento!'); var año = parseInt(prompt('¿En qué año naciste?'));}
else {alert('Muy bien, completaste el dato en el primer intento')}

alert ('Tu nombre es ' + nombre + ' y naciste en el año ' + año );

let resultado = actual - año;

if (resultado < 18) {alert('¡Hola, ' + nombre + '!' + ' Tenes ' + resultado + ' años. Eso singifica que sos menor de edad.');}
else (resultado >= 18); {alert('¡Hola, ' + nombre + '!' + ' Tenes ' + resultado + ' años. Eso significa que sos mayor de edad.');}


