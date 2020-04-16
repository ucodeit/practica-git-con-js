'use strict'

//Switch
var edad = 60;
var imprime = " ";
switch(edad) // es mejor hacer una variable extra y cambiar su valor en lugar de hacer console log por opción
{
	case 18:
		imprime = "acabas de cumplir la mayoria de edad";
	break;
	case 25:
		imprime = "ya eres adulto";
	break;
	case 40:
		imprime = "crisis de los 40";
	break;
	case 75: 
		imprime = "ya eres un anciano"
	break;
	default:
		imprime = "tu edad es neutra";
	break;
}

console.log(imprime);