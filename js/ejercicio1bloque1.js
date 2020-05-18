'use strict'

/*
Hacer un programa que nos pida 2 números y que nos diga cual es mayor, cual es menor o si son iguales
Plus: que al recirbir caractares diferentes a un numero o numeros menores o iguales a 0, nos los vuelva a pedir
*/
//intento dax
/*
var numero1 = prompt("ingresa porfavor un numero", 0);
var numero2 = prompt("ingresa porfavor otro numero", 0);

if(Number (numero1) > Number (numero2))// diferencias aqui tu hiciste el parse con Number dentro del if
{
	alert("Tu numero 1 es mayor que tu numero 2");
}
else if(Number (numero1) == Number (numero2))
{
	alert("Tu numero 1 es igual que tu numero 2");
}
else
{
	alert("Tu numero 1 es menor que tu numero 2");
}
*/
// intento dax numero 2
var numero1 = Number(prompt("ingresa porfavor un numero", 0));
var numero2 = Number(prompt("ingresa porfavor otro numero", 0));

while(numero1<= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2))
{
	numero1 = Number(prompt("ingresa porfavor un numero", 0));//aqui tambien iran parses porque se solicita otra vez el dato
	numero2 = Number(prompt("ingresa porfavor otro numero", 0));
}

if(numero1 > numero2)// corregir el error del parse debido a que tendria que poner demasiados parses
{
	alert("Tu numero 1 es mayor que tu numero 2");
}
else if(numero1 == numero2)
{
	alert("Tu numero 1 es igual que tu numero 2");
}
else if (numero1 < numero2)
{
	alert("Tu numero 1 es menor que tu numero 2");
}
else
{
	alert("favor de introducir numeros correctos")//He corregido mi error de codigo en cuanto a caracteres
}

//falta valvula de error en ek caso de no meter números

//como lo hizo el profe
/*
var numero1 = parseint(prompt("Introduce el primer numero", 0));//el inició su parse en las variables usando Parseint
var numero2 = parseint(prompt("Introduce el segundo numero", 0));

if(numero1 == numero2)// diferencias aqui tu hiciste el parse con Number dentro del if
{
	alert("Los numeros son iguales");
}
else if(numero1 > numero2)
{
	alert("El número mayor es: "+numero1);
	alert("El número menor es: "+numero2);
}
else if(numer1 < numero2)
{
	alert("El número mayor es: "+numero2);
	alert("El número menor es: "+numero1);
}
else
{
	alert("Introduce los numeros correctos");// El profesor coloco una salida antierror en la entrada de datos
}
*/