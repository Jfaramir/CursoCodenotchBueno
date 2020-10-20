function crearVector(max,numAleatorios) {
    let vector = [];
        for (j = 0; j < numAleatorios; j++) {
            vector.push(Math.floor(Math.random() * (max - 0 + 1) + 0));
        }
    return vector;
}

function sumaVectores(vector1,vector2) {
    let sumaVectores = [];
    var vectorAux1 = 0;
    var vectorAux2 = 0;
    if (vector1.length == vector2.length) {
        for (let i = 0; i < vector1.length; i++) {
            vectorAux1 = vector1[i];
            vectorAux2 = vector2[i];
            sumaVectores.push(vectorAux1 + vectorAux2);
        }
    }else {
        return "falla to, tio. Y pa colmo ni tienen el mismo numero de elementos";
    }
    return sumaVectores;
}

function productoNumVector(numero,vector1) {
    let vectoresMultiplicados = [];
        for (i = 0; i < vector1.length; i++) {
            vectoresMultiplicados.push(vector1[i] * numero);
        }
    return vectoresMultiplicados;
}

function restaVectores(vector1,vector2) {
    let restaVectores = [];
    var vectorAux1 = 0;
    var vectorAux2 = 0;
    if (vector1.length == vector2.length) {
        for (let i = 0; i < vector1.length; i++) {
            vectorAux1 = vector1[i];
            vectorAux2 = vector2[i];
            restaVectores.push(vectorAux1 - vectorAux2);
        }
    }else {
        return "falla to, tio. Y pa colmo ni tienen el mismo numero de elementos";
    }
    return restaVectores;
}

function multiplicaVectores(vector1,vector2) {
    let multiplicaVectores = [];
    var vectorAux1 = 0;
    var vectorAux2 = 0;
    if (vector1.length == vector2.length) {
        for (let i = 0; i < vector1.length; i++) {
            vectorAux1 = vector1[i];
            vectorAux2 = vector2[i];
            multiplicaVectores.push(vectorAux1 * vectorAux2);
        }
    }else {
        return "falla to, tio. Y pa colmo ni tienen el mismo numero de elementos";
    }
    return multiplicaVectores;
}

module.exports={crearVector,sumaVectores,productoNumVector,restaVectores,multiplicaVectores};
