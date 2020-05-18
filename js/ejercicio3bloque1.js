'use strict'

/*
Hacer un programa que muestre todos los numeros que hay entre dos numeros que introduzca el usuario
*/


//intento dax
alert("Bienvenido, este es un programa que te muestra los numeros que hay entre 2 numeros seleccionados");
var numero1 = Number(prompt("Por favor, escribe el primer numero: ", 0));
var numero2 = Number(prompt("Por favor, escribe el segundo numero: ", 0));
if(numero2 == numero1+1) // a diferencia del programa del profe, este comprueba si el intervalo es valido
//aqui no se contradice el programa ya que al estar este if fuera del buvle, solo se coprueba 1 vez dicha condición
	{
		alert("Lo siento, el intervalo no tiene numeros intermedios");
	}
else
{	 
	do
	{
		if(isNaN(numero1) || isNaN(numero2))
		{
			alert("Error, favor de escribir numeros");
		}
		else
		{
			numero1 = numero1+1;
			console.log(numero1); 	
		}
	}
	while(numero1 < numero2-1)
}
alert("tus numeros fueron numero 1:"+numero1+" y numero 2: "+numero2);

/*
//intento profe

var numero1 = Number(prompt("Introduce el primer numero: ", 0));
var numero2 = Number(prompt("Introduce el segundo numero: ", 0));

document.write("<h1>De "+numero1+" a "+numero2+" estan estos numeros </h1>")
//Nota con este comando "document.write" puedes introducir codigo html con el fin de que se ejecute en el index
//de esta manera el hizo que esto se escribiera en la pag en lugar de la consola
for(var i = numero1; i <= numero2; i++) //el empleo un metodo mas simple que muestra los numeros completos en lugar de los intermedios
{
	document.write(i+"<br/>");
}
*/