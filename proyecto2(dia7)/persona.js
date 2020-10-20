// var mylib = require("./auxClasePersona").default;

class Persona {
    constructor (altura,peso,genero,anyoNacimiento,aficciones){
        this.altura = altura;
        this.peso = peso;
        this.genero = genero;
        this.anyoNacimiento = anyoNacimiento;
        this.edad = this.calcEdad(this.anyoNacimiento);
        this.aficciones = aficciones;
    }

    get Imc(){
        return this.calcularImc(this.peso,this.altura);
    }

    get Edad(){
        return this.edad;
    }

    get Altura(){
        return this.altura
    }

    get Peso(){
        return this.peso
    }

    get Genero(){
        return this.genero
    }

    get AnyoNacimiento(){
        return this.anyoNacimiento
    }

    get Aficciones(){
        return this.aficciones
    }

    setEdad(nuevaEdad){
        this.edad = nuevaEdad;
    }

    setAltura(nuevaAltura){
        this.altura = nuevaAltura;
    }

    setPeso(nuevoPeso){
        this.peso = nuevoPeso;
    }

    setGenero(nuevoGenero){
        this.genero = nuevoGenero;
    }

    setAnyoNacimiento(nuevoAnyoNacimiento){
        this.anyoNacimiento = nuevoAnyoNacimiento;
    }

    setAficciones(nuevasAficciones){
        this.aficciones = nuevasAficciones;
    }

    calcularImc(peso,altura) {
        var resultado = 0;
    
        if (peso == "0") {
            return("Debe introducir peso");
        } else {
            if (altura == "0") {
                return("Debe introducir altura");
            } else {
                resultado = peso / (altura * altura) * 10000;
                if (resultado <= "18.5") {
                    return("Tu IMC es: " + resultado + ". Peso Insuficiente");
                } else if (resultado >= "18.5" && resultado <= "24.9") {
                    return("Tu IMC es: " + resultado + ". Peso Normal");
                } else if (resultado >= "25" && resultado <= "26.9") {
                    return("Tu IMC es: " + resultado + ". Sobrepeso Grado I");
                } else if (resultado >= "27" && resultado <= "29.9") {
                    return("Tu IMC es: " + resultado + ". Sobrepeso Grado II");
                } else if (resultado >= "30" && resultado <= "34.9") {
                    return("Tu IMC es: " + resultado + ". Obesidad Grado I");
                } else if (resultado >= "35" && resultado <= "39.9") {
                    return("Tu IMC es: " + resultado + ". Obesidad Grado II");
                } else if (resultado >= "40" && resultado <= "49.9") {
                    return("Tu IMC es: " + resultado + ". Obesidad Morbida");
                } else if (resultado > "49.9") {
                    return("Tu IMC es: " + resultado + ". Obesidad Extrema");
                }
            }
        }
    }

    calcEdad(anyoNacimiento) {
        var dia = new Date();
        var anyoActual = dia.getFullYear();
    
        return (anyoActual - anyoNacimiento);
    }

    mostrarTodos(altura,peso,genero,anyoNacimiento,edad,aficciones){
        let persona = [];

        altura = "Altura: " + altura + ", ";
        peso = "Peso: " + peso + ", ";
        genero = "Genero: " + genero + ", ";
        anyoNacimiento = "Año nacimiento: " + anyoNacimiento + ", ";
        edad = "Edad: " + edad + ", ";
        aficciones = "Aficciones: " + aficciones + ", ";

        return persona = altura + peso + genero + anyoNacimiento + edad + aficciones;
    }

    mostrarAficciones(){
        return this.aficciones;
    }
}


export default Persona;