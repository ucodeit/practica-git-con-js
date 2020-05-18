'use strict'

/*
Hacer un numero que nos diga si es par o impar
1.-ventana prompt
2.-verificar si el numero es invalido, tiene que volver a pedirlo
*/

//intento dax
var numero = 0;
alert("binvenido, Este es un programa que te dice i un numero es par o impar, si deseas salir del programa, teclea un numero negativo");
while(numero >= 0)
{
	numero = Number(prompt("favor de introducir un numero: ", 0));
	if(isNaN(numero))
	{
		alert("error favor de introducir un caracter numérico");
		numero = Number(prompt("favor de introducir un numero: ", 0));
	}
	else if(numero == 0)
	{
		alert("lo siento el 0 es un numero neutro");
	}
	else if(numero%2 == 0 && numero > 0)
	{
		alert("el numero "+numero+" es par");
	}
	else if(numero%2 != 0 && numero > 0)
	{
		alert("el numero "+numero+" es impar")
	}
}

/*
//solución profe

var numero = Number(prompt("introduce un numero: ", 0));

while(isNaN(number))
{
	number = Number(prompt("introduce un numero: ", 0));
}

if(number % 2 == 0)
{
	alert("es un numero par");
}

else
{
	alert("es un numero impar");
}