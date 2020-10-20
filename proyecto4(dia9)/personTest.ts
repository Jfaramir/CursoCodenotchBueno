import { Person } from "./person";

let p1 = new Person("Pedro",18,"C/Perales 13");

console.log(p1.printName());
console.log(p1.yearOfBirth(2020));
console.log(p1.getAddress());
p1.setAddress("C/El peralejo");
console.log(p1.getAddress());
console.log(p1.name);
console.log(p1.age);