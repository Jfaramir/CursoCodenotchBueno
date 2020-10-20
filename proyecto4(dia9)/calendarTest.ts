import { Calendar } from "./calendar";
import { Person } from "./person";

var c1 = new Calendar();

let p1 = new Person("Pedro", 21, "C/Letras");
let p2 = new Person("David", 18, "C/Ciencias");
let arrayPersonas:Person[];

arrayPersonas = [p1,p2];

c1.people = arrayPersonas;

c1.printCalendar();