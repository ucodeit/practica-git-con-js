'use strict'

//ambito de variables

/*
Las variables pueden establecerse de 2 maneras, ya sea globales o Locales

Se le dice a una variable global cuando esta puede ser retomada desde cualquier lugar del codigo sin reestriccion.

En cambio se le denomina variable local a la variable que es declarada dentro de una funcion por l cual esta solo puede ser manipulada
dentro de los parametros de la misma sin oportunidad de ser solicitada por alguna otra funcion ajena.
*/

function holaMundo(texto)
{
	var hola_mundo = "Texto dentro de función";//variable local, se puede usar solo dentro de la función

	console.log(texto);
	console.log(numero.toString()); // La funcion toString permite que al colocarselo a un objeto esta se convierte en string
	console.log(hola_mundo); //esto si se puede
}
//variables globales, se pueden usar donde sea
var numero = 12;
var texto = "Hola mundo soy una variable global";
// console.log(hola_mundo) Esto ya no se puede
holaMundo(texto);