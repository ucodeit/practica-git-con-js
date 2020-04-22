'use strict'

// bucle while
//A diferencia de un bucle for, este es un bucle infinito que se ejecutara mediante una condición

var year = 2018;

while(year != 1991)// con esta condición no se muestra el 1991
{
	//se ejecuta esto
	console.log("estamos en el año: "+year);

	if(year == 2000)
	{
		break;//esta palabra sirve en especial para romper un bucle se puede acompañar con una condición
	}

	year--;
}

// do while	

var years = 30;

do
{
	alert("solo cuando sea diferente a 20");
	years--; // si esto se ejecuta con un valor concreto sin incremengtar es posible que la condicion se cumpla o no
}while(years > 25) // hay que vigilar constantemente la condición pues esta puede quedarse infinita si no se esclarece bien