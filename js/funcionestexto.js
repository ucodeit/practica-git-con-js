'use strict'

//Metodos para procesar texto

//Transformación de textos

var numero = 444;
var texto1 = "Este es un texto de prueba texto";
var texto2 = "Este es otro texto de prueba";

/*
var dato = numero.toString(); // Esta función permite convertir un objeto en un String de texto
	dato = texto1.toUpperCase(); // Esta función permite convertir cualquier texto en un texto de mayusculas
	dato = texto1.toLowerCase(); // Esta función permite convertir cualquier texto en un texto de minusculas
console.log(dato);

//Calcular longitud de un texto

var nombre = "DAX";

console.log(nombre.length);
/*Esta funcion permite contar el numero de caracteres que posee un texto, en dado caso su funcion es limitada por otros casos que no 
corresponden a un texto como es el caso de no declarar la variable, que la variable tenga un dato null o que el dato sea número
Nota: el espacio si cuenta como caracter contable

Nota 2: De la misma manera la función puede conar el numero de casillas que posee un array
*/
/*
//ejemplo array
nombre = ["hola", "DAX"];
console.log(nombre.length);

//concatenacion de textos

/*Se pueden unir textos y variables mediante la concatenación de tal manera que sea mas facil procesar datos de entrada*/
/*(borrar para activar)
var textoTotal = texto1+" "+texto2;

//Una funcion con similar para concatenar es concat

var textoTotal2 = texto1.concat(""+texto2);

console.log(textoTotal);
console.log(textoTotal2);
(borrar para activar)*/

//Busqueda de texto
/*
	La busqueda de texto se identifica mediante el método indexOf("palabra") o search("palabra") la cual al describirse para una variable string ya antes
	declarada, analizara el texto e indicara el lugar de inicio de la palabra que se busca.
	En el caso contrario, el método LastIndexOf("palabra") permitira indicar el caracter donde comienza la ultima mencionde diha palabra
	En caso de no existir dicha palabra a buscar, el resultado en consola será -1
	El metodo match se emplea para realizar un coleccion de coordenadas dentro de nuestro texto, es decir, la busqueda arrojará 
	información mas ordenada en forma de array sobre la primera palabra que coincida con la busqueda

	Nota de match: en el caso de querer una busqueda de varias palabras en un texto se deberá encerrar la palabra a buscar entre
	barras (/palabra/) esto a su vez debera ser seguido de la abreviación gi o g despues de la segunda barra para indicar una busqueda
	global (/palabra/gi)

	Para hacer una extración de texto de a traves de una busqueda se debera usar el metodo substr(caracter de inicio, longitud de extraccion)
	esto permitira almacenar en una  vaiable dicho tramo de texto como si fuera un nuevo string

	De manera similar pero abreviada, se utilizará charAt(coordenada de caracter) para extraer una letra de un string mediante su posición

	Un metodo que permite la revision de string mediante coincidencia con su palabra o palabras de inicio es startsWith("Palabra o palabras")
	esto arrojara un true o false si nuestro string posee dicha coincidencia en su inicio, de manera homologa se puede usar 
	endsWith("palabra o palabras") para confirmar si termina con dicha busqueda.
	
	Para buscar una palabra de manera rapida y generalizada se puede usar el metodo includes("palabra exacta"), esto arrojara un true
	o false tras la bsqueda de su existencia
*/
/*(Eliminar para activar)
var busqueda = texto1.indexOf("texto");
var busqueda2 = texto1.lastIndexOf("texto");
var busqueda3 = texto1.search("texto");
var busqueda4 = texto1.match("texto");
var busqueda5 = texto1.match(/texto/gi);
var busqueda6 = texto1.substr(11,5);
var busqueda7 = texto1.startsWith("queso");
var busqueda8 = texto1.endsWith("texto");
var busqueda9 = texto1.includes("texto");
console.log(busqueda9);
(eliminar para activar)*/

//funciones de reemplazo
/*
	Los metodos de reemplazo como repace("palabra a buscar", "palabra que la reemplazara") permiten cambiar parte del texto en un string
	
	El metodo slice(inicio,termino) permite separar un string con una extraccion de texto la cual comenzara desde una coordenada y seguira hasta terminar 
	o hasta que se le digael string eliminando todo lo anterior a dicha coordenada

	La función split("caracter o palabra separadora") encerrara el texto del string en un array, sin embargo el acomodo depende del 
	separadr por ejemplo si en un e¿string se especifica que el separador es un espacio (" "), cada palabra sera una coordenada del array

	El metodo trim permite eliminar los espacios por delante y por detras del texto seleccionado
*/

var busqueda = texto1.replace("texto", "tocino");
var busqueda2 = texto1.slice(11);
var busqueda3 = texto1.split(" ");
var busqueda4 = texto1.trim();
console.log(busqueda4);