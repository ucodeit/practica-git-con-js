'use strict'

/* condicional if
son estructuras que permiten la comparación de condiciones para poder ejecutar otra acción*/

var edad1 = 10;
var edad2 = 12;


if(edad1 > edad2)
{
	console.log("Edad uno es mayor que edad dos");

}
else
{
	console.log("La edad uno es inferior");
}

var edad3 = 40;
var nombre = 'Dax';

/*operadores relacionales
	Mayor que	>
	Menor que	<
	Mayor igual	>=
	Menor igual	<=
	igual		==
	distinto	!=
*/
if(edad3 >= 18)
{
	console.log(nombre+" tiene "+edad3+" años por lo tanto es mayor de edad. ");
	if (edad3 <= 33)// el if anidado permite condicionar el codigo previo una vez cumplida la primera condición
	{
		console.log("todavia eres millenial");
	}
	else if(edad3 >= 70)// el else if (es para hacer una comparación esra a partir de otra ya echa, esto evita hacer muchos if
	// y else anidados)
	{
		console.log("eres anciano");
	}
	else
	{
		console.log("ya no eres millenial");
	}
}
else
{
	console.log(nombre+" tiene "+edad3+" años, es menor de edad. ");
}

/*operadores lógicos
AND(Y): && significa que se hace una condición a la vez que se le aplica otra en un mismo if, ambas deben ser cumplidas
OR(O): || se aplica para 2 condiciones en un if la cual solo debe cumplir una condición sin embargo el dato debera pasar por ambas
Negación: ! el dato puede pasar de manera negada o la condición a cumplir debe ser negada o se niega lo negado
*/
var year = 2028;
//AND
if(year >= 2000 && year < 2020)
{
	console.log("Estamos en la era actual");
}
else
{
	console.log("Estamos en la era posmoderna");
}

//OR
if(year == 2008 || year == 2018)
{
	console.log("el año acaba en 8");
}

if(year == 2008 || (year >= 2018 && year == 2028)) //de esta manera se pueden hacer combinaciones infinitas
{
	console.log("el año acaba en 8");
}
else
{
	console.log("año no registrado");
}
//Negación
if(year != 2016)
{
	console.log("no es el año 2016 realmente es: "+year);
}