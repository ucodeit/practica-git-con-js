'use strict'

//array, arreglos o matrces, son lo mismo

/*
	Es una coleccion de tipos de datos de valores que puede tener una variable, estos se ordenan a manera de matríz

	Un array puede recibir cualquier tipo de dato ya sea string, numero, booleano, o hasta u mismo array para que sea multidimensional
	
	Las matrices ordenan los datos por coordenadas de tal manera que para obtener un dato, este debe invocarse mediante dicha 
	coordenada. El arrelo siempre comenzara desde la posicion 0.
*/

var nombre = "DAX";
var nombre1 = ["DAX", "DARKO", "LIGHTIUM", "TECH", 502, true];

//aqui esto se convierte en un objeto mediante un metodo
var lenguajes = new Array("PHP", "JS", "Java", "C#", "C", "Pascal");
/*
console.log(nombre);
console.log(nombre1);
console.log(lenguajes);

//para consultar un elemento del array si invoc su numbre de la variable y el numero de la posicion
console.log(nombre1[0]);
*/

// arrays avanzados
/*var elemento = Number(prompt("que elemento del array seleccionaras?", 0));
console.log(nombre1.length);// se puede usar length para medir cuantas celdas hay en un array
if(elemento >= nombre1.length) //esto es mejor que fijar los rangos de numeros con compuertas
{
	alert("ha habido un error, por favor introduce un numero de celda entre 0 y 5");
}
else
{
	alert("El usuario seleccionado es: "+nombre1[elemento]);
}*/

// array avanzados recorrer array

document.write("<h1>lenguajes de programacion del 2018</h1>");
document.write("<ul>");

/*para recorrer un array sin necesidad de enlistar uno por uno los eslabones, se puede utilizar un bucle for donde la variable
recorra el largo del array */

//Mediante for

/*for(var i = 0; i < lenguajes.length; i++)
{
	document.write("<li>"+lenguajes[i]+"</li>");
} */

//Mediante forEach
/*
lenguajes.forEach((elemento,index, data)=>{ //Los parametros index y data son opcionales sin embargo son palabras reservadas por la posicion
	console.log(data) // mostrara como se rrecorrio mediante la consola
	document.write("<li>"+index+" - "+elemento+"</li>");
}); // nota, aqui usaste simplemente una funcion anonima y flecha, no has usado un callback porque no posisionaste la funcion
    // en codigos sepados esto cuenta como una simple linea de codigo
*/

//Mediante for in 

for(let lenguaje in lenguajes)
{
	document.write("<li>"+lenguajes[lenguaje]+"</li>");// usando solo lenguajes[lenguaje] mostrara el contenido, al usar lenguaje mostrara indice
}


document.write("</ul>");

//Busquedas

/*Las buesquedas dentro de un array generalemente se hacen mediante un callback de una funcion especifica llamada find()*/
/* via tradicional
var busqueda = lenguajes.find(function(lenguaje)
{
	return lenguaje == "PHP7"// si est no es especifico, no encontrara el objeto
});
*/

// via alterna y recortada
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");// si est no es especifico, no encontrara el objeto

//busqueda de indice
var busqueda2 = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

//busueda de comparatia de valores de valores
var precios = [10, 20, 30, 50, 80, 12];

var busqueda3 = precios.some(precio => precio > 80);

console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);