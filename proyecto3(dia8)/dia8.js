class Dia8{
    impresora = (elem = "No pasan valor") =>{
        console.log(elem);
    }

    multiply = (x,y) => {
        return x * y;
    }

    sumaArray = (elem,resultado = 0) =>{
        if (Array.isArray(elem)) {
            for (let i = 0; i < elem.length; i++) {
                resultado += elem[i];
            }
            return resultado;
        }else if (elem == undefined) {
            return resultado;
        }else{
            return "No has introducido un array como parametro de entrada";
        }
        
    }

    ascii_cipher = (elem) =>{
        var resultado = "";
        for (let i = 0; i < elem.length; i++) {
            resultado += elem.charCodeAt(i) + " ";
        }
        return resultado;
    }

}

class Password{
    constructor(password){
        this.length = 8;
        this.password = password;
    }

    isStrong(){
        var strongRegex = new RegExp("^(?=.{9,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        if ( this.length <= this.password.length) {
            if (this.password.length == 0) {
                return false;
            } else if (strongRegex.test(this.password)) {
                return true;
            } else if (mediumRegex.test(this.password)) {
                return true;
            } else {
                return false;
            }
        }else{
            return "La contraseña tiene que tener 8 o más caracteres";
        }
    }

    generatePass(){
        var abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                            "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                                "0","1","2","3","4","5","6","7","8","9",".","-","_","$","&","#","@"];
        var numero = 8;
        var numeroAleatorio = 0;
        let contraseña = "";
    
        for(var i = 0; i<numero; i++){
            numeroAleatorio = parseInt(Math.random()*abecedario.length);
            contraseña += abecedario[numeroAleatorio].toString();
        }
        return contraseña;
    }

    get gLength(){
        return this.length
    }

    set sLength(nuevoLength){
        this.length = nuevoLength;
    }

    get gPassword(){
        return this.password;
    }

    set sPassword(nuevaPassword){
        this.password = nuevaPassword;
    }

}


var d1 = new Dia8();
var p1 = new Password("YdTr3heH");
let array = [1,2,3,4,5,6,7,8,9];
let frase = "Codenotch and Javascript are awesome!";

d1.impresora("Abemus data");
d1.impresora();
console.log(d1.sumaArray(array));
console.log(d1.sumaArray(1));
console.log(d1.sumaArray());
console.log(d1.ascii_cipher(frase));
console.log(p1.generatePass());
console.log(p1.isStrong());

