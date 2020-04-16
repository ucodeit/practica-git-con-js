'use strict'

//Operadores

var numero1 = 7;
var numero2 = 12;
var operacion = numero1 % numero2;

alert("Es resultado de la operacion es: " + operacion);

//Tipos de datos

var numero_entero = 44;
var cadena_texto = 'hola "que" tal'; // la diferencia entre comillas simples y dobles es que las dobles tienen mas importancia
//nota: si se usaran primero comillas simples para encerrar la cadena de texto y luego comillas dobles, estas excluirian el texto
//que encierran del producto final puesto que su importancia se remarca de esa manera. ejemplo 'hola "que" tal' (el "que" seria 
//excluido). otra notacion es que estas se pueden volver parte del string
var verdadero_o_falso = true;

var numero_falso = "33";
var numero_falso2 = "33.4";
//Number();

console.log(cadena_texto);
console.log(verdadero_o_falso);
console.log(Number(numero_falso)+numero1);// la alabra reservada "Number" convierte numeros dentro de cadenas o strings a numero
console.log(parseInt(numero_falso2)+numero1);//convierte el string en numero pero concretamente a entero
console.log(parseFloat(numero_falso2)+numero1);//convierte el string en numero pero concretamente a flotante
console.log(String(numero_entero)+4);//proporciona el efecto completamente inverso a "Number"
console.log(typeof numero_entero);// "typeof" permite detectar el tipo de dato que tiene una variable
console.log(typeof numero_falso);
console.log(typeof verdadero_o_falso);