'use strict'

/*
Mostrar todos los numeros impares que hay entre 2 números introducidos por el usuario
*/

//intento dax
alert("Bienvenido, este es un programa que te muestra los numeros impares que hay entre 2 numeros seleccionados");
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
			if(numero1%2 != 0) // recuerda muy bien esta operacion pues significa
				//"si la diferencia/resto de la division de tu variable entre 2 es igual a cero"
			{
				console.log(numero1);
			} 	
		}
	}
	while(numero1 < numero2-1)
}
alert("tus numeros fueron numero 1:"+numero1+" y numero 2: "+numero2);

/*
//lo que hizo el profe
var numero1 = Number(prompt("Introduce el primer numero: ", 0));
var numero2 = Number(prompt("Introduce el segundo numero: ", 0));

while(numero1 < numero2)
{
	numero1++;
	if(numero1%2 !0)
	{
		console.log("El "+numero1+" es impar.");
	}
}