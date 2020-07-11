'use strict'

//Arrays multidimensionales

/*
Son arrays que contienen otros arrays
*/

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [categorias, peliculas];

//consulta de todo el array multidimensional
//console.log(cine);

//consulta especifica dentro del array multidimensional
/*console.log(cine[0][1]);//la primera posisicion es casilla del array cine y la segunda es casilla del array interno categorias
console.log(cine[1][2]);*/

//agregar elemento a un array

//a diferencia de otros lenguajes como php que usan peliculas[] = "Batman"; la syntaxis de esta linea cambua por un metodo, el cual es:
/*peliculas.push("Batman");
console.log(peliculas);*/

/*var elemento = " ";
do
{
	elemento = prompt("introduce tu pelicula: ");
	peliculas.push(elemento);
}while(elemento != "ACABAR");

peliculas.pop(); // Esta funcion elimina el ultimo elemento de un array por lo que ya no se mostraria la palabra acabar
*/
//Otra dorma de eliminar un dato de un array es indeterminarlo
// peliculas[0] = undefined

//Sin embargo la manera mas complicada para borrar un elemento especifico es con un indexof

/*var indice = peliculas.indexOf("Gran torino");
console.log(indice);
if(indice > -1)
{
	peliculas.splice(indice, 1);
}*/

//convertir un array en string separado por comas, esto tiene que guardarse en una variable

//var peliculas_string = peliculas.join();

//De manera contraria, se puede convertir un string en un array al usar el metodo split y especificando cual sera el separador

/*var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);

console.log(peliculas);
console.log(peliculas_string);*/

//ordenar la información de un array

/*
Para ordenar dicha información existen varias maneras las mas comunes son usando la funcion sort para ordenar alfabeticamente
y reverse para voltear el orden actual de los datos de un array
*/

//peliculas.sort();

peliculas.reverse();

console.log(peliculas);