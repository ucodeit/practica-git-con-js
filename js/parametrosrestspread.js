'use strict'

//Parametros REST y SPREAD

function listadoFrutas (fruta1, fruta2, ...resto_de_frutas)/*Parametro rest funciona al poner 3 puntos suspensivos antes del nombre
de un parametro el cual permite capturar el exceso de entrada de datos que sobrepasen la cantidad de parametros normales dentro de
un array.*/
{
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log(resto_de_frutas);
}

//listadoFrutas("Manzana", "Naranja", "Pera", "Guayaba", "Sandia");

var frutas = ["Manzana", "Naranja"]
/*El parametro Spread es similar en cuanto al simbolo del rest, sin embarg lo que cambia su nombre es su posicion dentro del código,
esto significa que el spread ocurre al colocar 3 puntos suspensivos antes del nombre de una variable cuyos datos rellenaran
los parametros de una funcion permitiendo que dichos parametros se acomoden en orden en lugar de que los datos queden como un
simple array dentro de un solo parametro (para consultas ver el video 45 de la seccion 12 del master de java script)*/

//Sin puntos suspensivos: en esta forma, los datos del array quedaran comoarray dentro del parametro fruta1
listadoFrutas(frutas, "Pera", "Guayaba", "Sandia");
//con puntos suspensivos: en esta forma el array acciona el spread permitiendo que cada dato del array de la variabe sea un parametro
//el resto de datos sobrantes pasara a otro array independiente debido al REST anterior
listadoFrutas(...frutas, "Pera", "Guayaba", "Sandia");

/*Recordatorio
REST se usa para prevenir entrada de datos extra en tus parametros de funcion colocandolos como array

SPREAD se usa para que el exceso de datos que vienen dentro de una variable a manera de array se acomoden dentro de los parametros
de una funcion.
*/