'use strict'

/*
Calculadora que pida dos numeros por pantalla

-Si metemos un numero mal que nos los vuelva a pedir
-En el cuerpo de la pagina, en una alerta y por la consola muestre el resultado de las operaciones
*/

//intento dax
alert("Bienvenido, este es un programa calculadora, para reutilizar, refresque la pagina")

var numero1 = Number(prompt("Favor de escribir el primer numero", 0));

while(isNaN(numero1))
{
	alert("Error, solo caracteres numericos porfavor");
	numero1 = Number(prompt("Favor de escribir el primer numero", 0));
}

var numero2 = Number(prompt("Favor de escribir el segundo numero", 0));

while(isNaN(numero2))
{
	alert("Error, solo caracteres numericos porfavor");
	numero2 = Number(prompt("Favor de escribir el segundo numero", 0));
}

var operacion = prompt("Por favor teclee la operacion a realizar escribiendo suma, resta, multiplicacion o division");

switch(operacion)
{
	case "suma":
		operacion = numero1 + numero2;
	break;

	case "resta":
		operacion = numero1 - numero2;
	break;

	case "multiplicacion":
		operacion = numero1 * numero2;
	break;

	case "division":
		operacion = numero1 / numero2;
	break;

	default:
		alert("Ese tipo de operacion no esta incluida en esta calculadora, por favor intente de nuevo");
	break;
}

alert("El resultado es: "+ operacion);
console.log("El resultado es: "+ operacion);
document.write("El resultado es: "+ operacion);

/*
//solucion profesor

var numero1 = parseInt(prompt('Introduce el primer numero'));
var numero2 = parseInt(prompt('Introduce el segundo numero'));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2))
{
	numero1 = parseInt(prompt('Introduce el primer numero'));
	numero2 = parseInt(prompt('Introduce el segundo numero'));
}

var resultado = "La suma es: "+(numero1+numero2)+" </br>"+
				"La resta es: "+(numero1-numero2)+" </br>"+
				"La multiplicacion es: "+(numero1*numero2)+" </br>"+
				"La division es: "+(numero1/numero2)+" </br>";
var resultadoCMD = "La suma es: "+(numero1+numero2)+" /n"+
				"La resta es: "+(numero1-numero2)+" /n"+
				"La multiplicacion es: "+(numero1*numero2)+" /n"+
				"La division es: "+(numero1/numero2)+" /n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);
*/