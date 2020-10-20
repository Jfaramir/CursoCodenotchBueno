import { Library } from "./library";
import { Book } from "./book";

var b1 = new Book("Introduccion a JavaScript",233, "2344433-BC23333", "Joseph Smith", "Now Editions");
var b2 = new Book("El camino de los reyes", 1203, "2466544-BC28888", "Brandon Sanderson", "Nova");
var b3 = new Book("El nombre del viento", 1109, "2122133-BC59766", "Brandon Sanderson", "Palza Janés");
var arrayBooks:Book[];

arrayBooks = [b1,b2,b3];


var l1 = new Library(arrayBooks, "https://google.com", "Juan Pablo Carpio");

console.log(l1.gAddress);
console.log(l1.gManager);
console.log(l1.toString());
console.log(l1.getNumberOfBooks());
console.log(l1.findByAuthor("Brandon Sanderson"));
l1.setAddress("https://www.youtube.com/");
console.log(l1.gAddress);
l1.setManager("Juan Pablo Carpio Guzman");
console.log(l1.gManager);