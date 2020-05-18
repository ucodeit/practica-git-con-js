'use strcit'

/*
Utilizando un bucle, mostrar la media de la suma de los numeros metidos por el usuario hasta que se introduzca un numero negativo
*/
//intento dax 
var suma = 0;
var contador = 0;

do
{
	numero = Number(prompt("favor de introducir un numero: ", 0));
	if (isNaN(numero))
	{
		numero = 0;
	}else if (numero > 0)
	{
		suma += numero; 
		//este operador += es lo mismo que poner suma = suma + numero; puesto que estas sumando la variable mas el extra
		contador++;
		//Nota 1: no pongas tu console log aqui porque podria generar error en el contador
	}
	console.log(suma);
	console.log(contador);

}while(numero >= 0)

alert("la suma de todos los numeros es: "+suma);
alert("el promedio de la suma es: "+ (suma / contador));// este resultado puede mostrarse periodicamente en el do
//sin embargo eso podria afectar el codigo de las iteraciones

//Nota: debes de revisar muy bien cuales sumas son periodicas y cuales son de una sola accion puesto que eso libera memoria de proceso