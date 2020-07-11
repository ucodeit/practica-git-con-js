'use strict'

//Funciones
/* Ejemplo 1
Es un agrupacion reutilizable de un conjunto de intrucciones
*/

/*function calculadora()
{
	return "Hola soy la calculadora!!";// recuerda que para que la calculadora no devulva nada debe de tener void o similar
}

console.log(calculadora(), calculadora(), calculadora());
*/

/* Ejemplo 2
// se define la funcion
function calculadora()
{
	//se ejecutara todo lo que este aqui adentro
	console.log("hola soy la calculadora");
	console.log("si soy yo"); //el return es parecido al console log, recuerda que el return solo funciona para comprobar el
							// funcionamiento del programa, es como un console log
}

// es asi como se llama, puede ser desde el script o desde la misma consola
calculadora();
calculadora();
calculadora();
calculadora();
*/

// Parametros
/*
variables que alteran la logica o resultado que devuelve la función
*/
/*
function calculadora(numero1, numero2)// aqui estableces los parametros y los usas abajo
{
	
	console.log("Suma: "+ (numero1+numero2)); //tu puedes stablecer las acciones en esta parte
	console.log("Resta: "+ (numero1-numero2)); // de esta forma son fijos los calculos, cuando se cambian por los parametros
	console.log("Muñtiplicacion: "+ (numero1*numero2)); // la accion sera mas dinamica
	console.log("Division: "+ (numero1/numero2));
	console.log("********************************");

	//return "Hola soy la calculadora!!";	
}
*/
/* primera llamada
calculadora(12, 8);
calculadora(98, 2);
*/
/*segunda llamada
for(var i = 1; i <= 10; i++)
{
	console.log(i);
	calculadora(i, 8);
}
*/

//Parametros opcionales
/*
Son variables que alteran la logica o resultado dentro de la funcion, sin embargo no es necesario que reciban datos del usuario,
pueden ser inicializados con un valor
*/
/*
function calculadora(numero1, numero2, mostrar = false)
{
	if(mostrar == false)
	{
	console.log("Suma: "+ (numero1+numero2)); 
	console.log("Resta: "+ (numero1-numero2)); 
	console.log("Muñtiplicacion: "+ (numero1*numero2)); 
	console.log("Division: "+ (numero1/numero2));
	console.log("********************************");
	}
	else
	{
	document.write("Suma: "+ (numero1+numero2)+"<br/>"); 
	document.write("Resta: "+ (numero1-numero2)+"<br/>"); 
	document.write("Muñtiplicacion: "+ (numero1*numero2)+"<br/>"); 
	document.write("Division: "+ (numero1/numero2)+"<br/>");
	document.write("********************************"+"<br/>");
	}
	

	//return "Hola soy la calculadora!!";	
}

calculadora(6,7);
calculadora(8, 19, true); //aqui se puede aprecir que al cambiar el parametro mostrar, se ejecutara el codigo del else
calculadora(8, 17, true);
*/

//funciones dentro de unas funciones
/*
este tipo de codificacion permite que las funciones no sean lineales y los codigos puedan estar dispersos en otra parte del script
o inclusive dentro de otros scripts
*/

function porConsola(numero1, numero2)
{
	console.log("Suma: "+ (numero1+numero2)); 
	console.log("Resta: "+ (numero1-numero2)); 
	console.log("Muñtiplicacion: "+ (numero1*numero2)); 
	console.log("Division: "+ (numero1/numero2));
	console.log("********************************");
}

function porPantalla(numero1, numero2)
{
	document.write("Suma: "+ (numero1+numero2)+"<br/>"); 
	document.write("Resta: "+ (numero1-numero2)+"<br/>"); 
	document.write("Muñtiplicacion: "+ (numero1*numero2)+"<br/>"); 
	document.write("Division: "+ (numero1/numero2)+"<br/>");
	document.write("********************************"+"<br/>");
}
function calculadora(numero1, numero2, mostrar = false)
{
	if(mostrar == false)
	{
		porConsola(numero1,numero2);
	}
	else
	{
		porPantalla(numero1,numero2);
	}
	

	return true;	
}

calculadora(6,7);
calculadora(8, 19, true); 
calculadora(8, 17, true);
calculadora(10,8);