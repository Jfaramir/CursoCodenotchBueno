var mylib = require("./matriz");

console.log(mylib.crearMatriz(10,10,50));

var matriz1 = mylib.crearMatriz(10,10,50);
var matriz2 = mylib.crearMatriz(10,10,50);
console.log(mylib.sumaMatriz(matriz1,matriz2));

console.log(mylib.productoNumMatriz(5,matriz1));

console.log(mylib.restaMatriz(matriz1,matriz2));

console.log(mylib.productoMatriz(matriz1,matriz2));