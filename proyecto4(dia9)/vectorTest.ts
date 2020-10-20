import { Vector } from "./vector";

var v1 = new Vector(10,50);

let vector = [];
for (let j = 0; j < 10; j++) {
    vector.push(Math.floor(Math.random() * (50 - 0 + 1) + 0));
}

console.log("Elements");
v1.print();
console.log("Vector1");
console.log(vector);
console.log("Suma");
console.log(v1.add(vector));
console.log("Resta");
console.log(v1.subs(vector));
console.log("Multiplicacion");
console.log(v1.mult(vector));
console.log("Multiplicacion con numero");
console.log(v1.multNumber(5));