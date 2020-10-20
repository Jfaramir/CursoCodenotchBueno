import Vector from "./vectorymatriz.js";
import Matriz from "./matriz.js";

var v1 = new Vector();
var m1 = new Matriz([]);


console.log( v1.vector1);
console.log( v1.vector2);
console.log( v1.sumVectores);
console.log( v1.multiplicacionNumVector);
console.log( v1.restaVectore);
console.log( v1.multiplicaVectore);

console.log( m1.matriz1);
console.log( m1.sumaMatriz(m1.matrizBase,m1.matriz1));
// console.log( m1.multiplicacionNumMatriz);
// console.log( m1.restaMatrizes);
// console.log( m1.productoMatrizes);