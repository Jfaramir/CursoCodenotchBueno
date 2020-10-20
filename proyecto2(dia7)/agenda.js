import Persona from "./persona.js";


class Agenda {
    constructor(persona){
        this.persona = persona;
    }
    printPersonas(){
        let personas = [];
        for (let i = 0; i < this.persona.length; i++) {
            console.log(this.persona[i][0])
            personas.push( p1.mostrarTodos(this.persona[i][0],this.persona[i][1],this.persona[i][2],this.persona[i][3],this.persona[i][4],this.persona[i][5]));
        }
        return personas;  
    }
}

var p1 = new Persona();



export default Agenda;
