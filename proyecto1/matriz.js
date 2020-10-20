var mylib = require("./vector");

function crearMatriz(n,m,k) {
    var vector1 = mylib.crearVector(k,m);
    
    let matrizVectores = [];
    for (i = 0; i < n; i++) {
        var vector1 = mylib.crearVector(k,m);
        matrizVectores.push(vector1);
    }
    return matrizVectores;
}

function sumaMatriz(matriz1, matriz2) {
    let sumaMatrizes = [];
    if (matriz1.length == matriz2.length) {
        for (let i = 0; i < matriz1.length; i++) {
            if (matriz1[i].length == matriz2[i].length) {
                sumaMatrizes.push(mylib.sumaVectores(matriz1[i],matriz2[i]));
            }else {
                return "Los vectores no tienen el mismo numero de elementos";
            }
        }
        return sumaMatrizes;
    }else {
        return "Las matrizes no tienen el mismo numero de vectores";
    }
}

function productoNumMatriz(numero,matriz) {
    let matrizMultiplicada = [];
        for (i = 0; i < matriz.length; i++) {
            var tamanoVector = matriz[i].length;
            for (j = 0; j < tamanoVector; j++) {
                matrizMultiplicada.push(mylib.productoNumVector(numero,matriz[j]));
            }
        }
    return matrizMultiplicada;
}

function restaMatriz(matriz1,matriz2) {
    let restaMatrizes = [];
    if (matriz1.length == matriz2.length) {
        for (let i = 0; i < matriz1.length; i++) {
            if (matriz1[i].length == matriz2[i].length) {
                restaMatrizes.push(mylib.restaVectores(matriz1[i],matriz2[i]));
            }else {
                return "Los vectores no tienen el mismo numero de elementos";
            }
        }
        return restaMatrizes;
    }else {
        return "Las matrizes no tienen el mismo numero de vectores";
    }
}

function productoMatriz(matriz1,matriz2) {
    let multiplicaMatrizes = [];
    if (matriz1.length == matriz2.length) {
        for (let i = 0; i < matriz1.length; i++) {
            if (matriz1[i].length == matriz2[i].length) {
                multiplicaMatrizes.push(mylib.multiplicaVectores(matriz1[i],matriz2[i]));
            }else {
                return "Los vectores no tienen el mismo numero de elementos";
            }
        }
    }else {
        return "Las matrizes no tienen el mismo numero de vectores";
    }
    return multiplicaMatrizes;
}


module.exports={crearMatriz,sumaMatriz,productoNumMatriz,restaMatriz,productoMatriz};