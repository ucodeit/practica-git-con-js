//VARIABLES
//Variables es un contenedor de información
//Aqui las variables se definen una vez que reciben el dato
var pais = "España"; //usar comillas simples o dobles para el string
var continente = "Europa";
var antiguedad = 2019;
var pais_y_continente = pais+' '+continente;
//aqui la concatenación es diferente puesto que lleva un + (más) en lugar de un . (punto) para otros lenguajes

pais="México";
continente="Latinoamérica";
// aqui la variable pais y continente saldra con los primeros datos puesto que por orden del codigo esto se une en la variable al principio
//al cambiarse hasta este punto, sale en la consola con los nuevos datos mientras que el alert conserva los primeros datos
// mucho OJO con estos DETALLES

// para que el alert consiga los nuevos valores solo baja la definicion de pais_y_continente abajo de los cambios
console.log(pais, continente, antiguedad);
alert(pais_y_continente);