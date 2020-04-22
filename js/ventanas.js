'use strict'

//Alerta
//ventana emergente que muestra un mensaje
alert("Esta es mi alerta!!");
alert("Este es mi texto");

//Confirmación
//Este pop-up permite lazar un mensaje que requiere de una señal booleana para continuar a la pag
var mi_resultado = confirm("¿Estas seguro que quieres continuar?");
//se debe condicionar mediante una variable para alterar elresultado de la descición
console.log(mi_resultado);

//Ingreso Datos
//funcion permite convocar un pop-up que solicitara un dato mediante una variable
var resultado = prompt("¿Qué edad tienes?", 18);
console.log(resultado);