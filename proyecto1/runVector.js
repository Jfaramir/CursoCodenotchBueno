var mylib = require("./vector");

// console.log(mylib.crearVector(50,10));

// console.log(mylib.sumaVectores(mylib.crearVector(50,10), mylib.crearVector(50,10)));
var vector1 = mylib.crearVector(50,10);
var vector2 = mylib.crearVector(50,10);
// console.log(mylib.sumaVectores(vector1,vector2));

// console.log(mylib.productoNumVector(5,mylib.crearVector(50,10)));
console.log(mylib.productoNumVector(5,vector1));

// console.log(mylib.restaVectores(mylib.crearVector(50,10),mylib.crearVector(50,10)));
// console.log(mylib.restaVectores(vector1,vector2));

// console.log(mylib.multiplicaVectores(mylib.crearVector(50,10),mylib.crearVector(50,10)));
// console.log(mylib.multiplicaVectores(vector1,vector2));
