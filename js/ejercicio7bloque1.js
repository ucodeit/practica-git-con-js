'use strict'

/*
Tabla de multiplicar de u número introducido por pantalla
*/

//intento dax
alert("Biemvenido, este es un programa que te muestra la tabla de multiplicar del numero que introduzcas, podras salir tecleando un número negativo.");

var numero = Number(prompt("Favor de introducir un numero:", 0));
document.write("<h3>La tabla de tu numero es:</h3><br/>"); 
if(isNaN(numero))
{
	alert("Error favor de introducir un caracter numerico");
	numero = Number(prompt("Favor de introducir un numero:", 0));
}
else
{
	if(numero >= 0)
	{
		for(var i = 1; i <= 10 ; i++)//Nota si encierras este for en un while entras en un bucle de bucles y no iniciará nada
		{
			document.write("<p> "+numero+" x "+i+" = "+(i*numero)+"</p>");
			/*
				Nota: cuando uses document.write engloba todo el enunciado dentro del header o del parrafo puesto que de otra 
				manera este generara enters que haran motsrar al contenido de manera horizontal 
			*/
			document.write("<br/>")
		}
	
	}	
}
document.write("<h3>Fue un placer ayudarle</h3><br/>");

/*
//solucion profe

var numero = Number(prompt("de que numero quires la tabla:", 1));
document.write("<h3>Tabla del "+numero+"</h3><br/>"); 
for(var i = 1; i <= 10 ; i++)
{
	document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
}

// solucion tablas del 1 al 10
for(var c = 1; c <= 10 ; c++)
	document.write("<h3>Tabla del "+c+"</h3><br/>"); 
	for(var i = 1; i <= 10 ; i++)
	{
		document.write(i+" x "+c+" = "+(i*c)+"<br/>");
	}
*/