'use strict'

//Pruebas de let y var
/*Let permite definir variables limitando su alcance al bloque de declaración o expresion donde se esta usando.
Var define una variable global o local sin importar el ambito del bloque*/
var numero = 40;
console.log(numero); //valor 40

//prueba con var
if (true)
{
	var numero = 50;
	console.log(numero); //valor 50
} 

console.log(numero); //valor 50

//prueba con let
var texto = "esto debe salir igual";
console.log(texto); // valor igual

if (true)
{
	let texto = "esto deberia cambiar el texto"; /*Lo que ocurrio aqui fue que se ha creado una variable diferente al var
	limitada al bloque de codigo correspondiente al if(true) solamente por lo tanto es que no cambiara e dato en el siguiente log*/
	console.log(texto); //valor cambiado 
}

console.log(texto);//valor igual