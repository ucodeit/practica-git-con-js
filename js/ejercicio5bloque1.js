'use strict'

/*
Mostrar todos los divisores de un numero que se introduce en un prompt
*/

alert("Bienvenido, este es un programa que te muestra los divisores del numero que introduzcas");
var numero1 = Number(prompt("Por favor, escribe el primer numero: ", 0));
var divisor = 0;
console.log("Los divisores del numero: "+numero1+" son: ");
divisor = numero1;
do
{
	if(isNaN(numero1))
	{
		alert("favor de introducir caracteres numericos");
	}
	else if(numero1 == 0)
	{
		alert("lo siento, el cero no tiene divisores")
		console.log(0);
	}
	else
	{
		if(numero1%divisor == 0)
		{
			console.log(divisor);
		}
		divisor--;
		/*
			cuidado, tardaste mucho aqui porque no te fijaste quien dividia a quien y pusiste en recursividad
			la igualdad de divisor con numero1 por lo que siempre se dividia a si mismo.
		*/
		
	}
}while(divisor > 0)

/*
//solucion profe

var numero = parseInt(prompt("Mete un numero", 1));

for(var i = 1; i <= numero; i++)
{
	if(numero%i == 0)
	{
		console.log("Divisor: "+i);
	}
}
*/
