'use strict'

//Funciones Anónimas

/*
Funciones que no poseen un nombre y se pueden guardar dentro de una variable, se utilizan para hacer callback
El callback es una funcion dentro de una funcion, se puede aojar dicha funcion en un parametro de la segunda función.

dichas estructuras son muy usadas en jquery o en proyectos de framework de desarrollo
*/
//Ejemplo simple funcion anonima
/*var pelicula = function(nombre) //la funcion podra llamarse con el nombre de la variable y este puede ser cambiado pero se invoca
								//igual que una función
{
	return "La pelicula es: "+nombre;
}
*/

//Ejemplo callback
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) // aqui se establecen 2 parametros que no se saben que son funcion
{
	var sumar = numero1 + numero2;

	sumaYmuestra(sumar); // se puede deducir que son funciones porque aqui las invocan pero no muestran su logica de codigo
	sumaPorDos(sumar);

	return sumar;
}

sumame(15, 25, function(dato) // es aqui donde el callback hace presencia y puede verse su logica, sin embargo esto puede estar
							// repartido dentro de la carpeta del proyecto en otro script 
{
	console.log("La suma es: ", dato);
},
function(dato)
{
	console.log("La suma por dos es: ", (dato*2));
});

//Ejemplo con función de flecha
/*
Simplemente sustituyes la forma de escritura Function(parametros){} por parametros => {} ya que de esta manera es mas rapido y
discreto el escribirlo, sin embargo, solo es permisible para un callback puesto que son lo mismo
*/
/*
sumame(15, 25, dato => // es aqui donde el callback hace presencia y puede verse su logica, sin embargo esto puede estar
							// repartido dentro de la carpeta del proyecto en otro script 
{
	console.log("La suma es: ", dato);
},
dato =>
{
	console.log("La suma por dos es: ", (dato*2));
});
*/