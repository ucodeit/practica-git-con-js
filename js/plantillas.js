'use string'

//Plantillas de texto

/*
	Las plantillas de texto permiten agilizar la escritura de texto concatenado de tal manera que pueda se mas comoda la 
	organizaciòn de nuestro texto para representarlo en pantalla, esto a su vez permite combinar mejor en una variable multilinea
	el texto a usar con document write

	para esto hay que utilizar las comillas invertidas (``) invocandolas con alt+96 en el teclado numerico y a su vez para llamar variables
	que contengan texto ingresado por el usuario estas se invocan con ${variable}.
*/

var nombre = prompt("introduce tu nombre");
var apellidos = prompt("introduce tus apellidos");

//Modo tradicional mediante concatenaciones
//var texto = "Mi nombre es: "+nombre+"<br/> Mis apellidos son: "+apellidos;

//A modo de plantilla
var texto = `
	<h1> Hola que tal </h1>
	<h3> Mi nombre es: ${nombre} </h3>
	<h3> Mis apellidos son: ${apellidos} </h3>
`;

document.write(texto);
