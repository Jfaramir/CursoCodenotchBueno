import { Book } from "./book";

var b1 = new Book("Introduccion a JavaScript",233,"2344433-BC23333","Joseph Smith","Now Editions");

console.log(b1.toString());
console.log(b1.gTitle);
console.log(b1.gNPages);
console.log(b1.gIssn);
console.log(b1.gAuthor);
console.log(b1.gEditorial);
b1.setTitle("El nombre del viento");
console.log(b1.gTitle);
b1.setNPages(1090);
console.log(b1.gNPages);
b1.setIssn("1234532-AC14321");
console.log(b1.gIssn);
b1.setAuthor("Patrick Rothfuss");
console.log(b1.gAuthor);
b1.setEditorial("Plaza Janés");
console.log(b1.gEditorial);