

class Vector{
    constructor(){
        this.vector1 = this.crearVector(50,10);
        this.vector2 = this.crearVector(50,10);
        this.sumVectores = this.sumaVectores(this.vector1, this.vector2);
        this.multiplicacionNumVector = this.productoNumVector(5,this.vector1);
        this.restaVectore = this.restaVectores(this.vector1,this.vector2);
        this.multiplicaVectore = this.multiplicaVectores(this.vector1,this.vector2);
    }


    crearVector(max, numAleatorios) {
        let vector = [];
        for (let j = 0; j < numAleatorios; j++) {
            vector.push(Math.floor(Math.random() * (max - 0 + 1) + 0));
        }
        return vector;
    }

    sumaVectores(vector1,vector2) {
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
            return "Los vectores no tienen el mismo numero de elementos";
        }
        return sumaVectores;
    }

    productoNumVector(numero,vector1) {
        let vectoresMultiplicados = [];
            for (let i = 0; i < vector1.length; i++) {
                vectoresMultiplicados.push(vector1[i] * numero);
            }
        return vectoresMultiplicados;
    }

    restaVectores(vector1,vector2) {
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
            return "Los vectores no tienen el mismo numero de elementos";
        }
        return restaVectores;
    }
    
    multiplicaVectores(vector1,vector2) {
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
            return "Los vectores no tienen el mismo numero de elementos";
        }
        return multiplicaVectores;
    }
}

export default Vector;