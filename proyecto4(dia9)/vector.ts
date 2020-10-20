export class Vector {
    private elements:number[];
    constructor(n:number,k:number) {
        let vector = [];
        for (let j = 0; j < n; j++) {
            vector.push(Math.floor(Math.random() * (k - 0 + 1) + 0));
        }
        this.elements = vector;
    }
    /**
     * print
     */
    public print() {
        console.log(this.elements);
    }
    /**
     * add
     */ 
    public add(vector1:number[]) {
        let sumaVectores = [];
        var vectorAux1:number;
        var vectorAux2:number;

        if (vector1.length == this.elements.length) {
            for (let i = 0; i < vector1.length; i++) {
                vectorAux1 = this.elements[i];
                vectorAux2 = vector1[i];
                sumaVectores.push(vectorAux1 + vectorAux2);
            }
        }else {
            return "Los vectores no tienen el mismo numero de elementos";
        }
        return sumaVectores;
    }
    /**
     * subs
     */
    public subs(vector1:number[]) {
        let restaVectores = [];
        var vectorAux1:number;
        var vectorAux2:number;

        if (vector1.length == this.elements.length) {
            for (let i = 0; i < vector1.length; i++) {
                vectorAux1 = this.elements[i];
                vectorAux2 = vector1[i];
                restaVectores.push(vectorAux1 - vectorAux2);
            }
        }else {
            return "Los vectores no tienen el mismo numero de elementos";
        }
        return restaVectores;
    }

    /**
     * mult
     */
    public mult(vector1:number[]) {
        let multiplicaVectores = [];
        var vectorAux1:number;
        var vectorAux2:number;
        if (vector1.length == this.elements.length) {
            for (let i = 0; i < vector1.length; i++) {
                vectorAux1 = this.elements[i];
                vectorAux2 = vector1[i];
                multiplicaVectores.push(vectorAux1 * vectorAux2);
            }
        }else {
            return "Los vectores no tienen el mismo numero de elementos";
        }
        return multiplicaVectores;
    }

    /**
     * multNumber
     */
    public multNumber(number:number) {
        let vectoresMultiplicados = [];
            for (let i = 0; i < this.elements.length; i++) {
                vectoresMultiplicados.push(this.elements[i] * number);
            }
        return vectoresMultiplicados;
    }
}