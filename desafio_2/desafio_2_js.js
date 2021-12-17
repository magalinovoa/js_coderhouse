let nombre = prompt('¿Cómo es tu nombre?');

let año = parseInt(prompt('¿En qué año naciste?'));

const actual = 2021

let resultado = actual - año;

if ((nombre == '' || año == '') || (nombre == '' && año =='')) {
    alert('¡Te olvidaste de completar uno de los datos!');
}
else {
    alert ('Nombre: ' + nombre + '\nAño: ' + año );
}


if (resultado < 18) {
    alert('¡Hola, ' + nombre + '!' + ' Tenes ' + resultado + ' años. Eso singifica que sos menor de edad.');
}
else (resultado >= 18); {
    alert('¡Hola, ' + nombre + '!' + ' Tenes ' + resultado + ' años. Eso singifica que sos mayor de edad.');
}


