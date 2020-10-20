import Agenda from "./agenda.js";


let personas = [[180,70,"M",1999,21,(["comer","videojugar","dormir","leer"])],
[160,60,"M",2004,16,(["comer","dormir","hacer deporte","tocar el piano"])]];

var agenda1 = new Agenda(personas);


// console.log(agenda1.persona);
console.log(agenda1.printPersonas());

