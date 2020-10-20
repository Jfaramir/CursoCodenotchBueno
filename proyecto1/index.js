// esto es para probar el gitbranch 23
// esto es para probar el gitbranch2

function calculadora(operacion, operador1, operador2) {
    if (operacion == "sum") {
        console.log(operador1 + operador2);
    }else if (operacion == "subs") {
        console.log(operador1 - operador2);
    }else if (operacion == "mult") {
        console.log(operador1 * operador2);
    }else if (operacion == "div") {
        console.log(operador1 / operador2);
    }else {
        console.log("La operacion: " + operacion + ", no es valida");
    }
}

// calculadora("sum",1,5);
// calculadora("subs",1,5);
// calculadora("mult",1,5);
// calculadora("div",1,5);
// calculadora("suum",1,5);

function suma(operando1, operando2){
    var operacion = operando1 + operando2;
    return operacion;
}

function resta(operando1, operando2) {
    var operacion = operando1 - operando2;
    return operacion;
}

function multiplicacion(operando1, operando2) {
    var operacion = operando1 * operando2;
    return operacion;
}

function division(operando1, operando2) {
    var operacion = operando1 / operando2;
    return operacion;
}

