"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        var vector = [];
        for (var j = 0; j < n; j++) {
            vector.push(Math.floor(Math.random() * (k - 0 + 1) + 0));
        }
        this.elements = vector;
    }
    /**
     * print
     */
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    /**
     * add
     */
    Vector.prototype.add = function (vector1) {
        var sumaVectores = [];
        var vectorAux1;
        var vectorAux2;
        if (vector1.length == this.elements.length) {
            for (var i = 0; i < vector1.length; i++) {
                vectorAux1 = parseInt(this.elements[i].toString());
                vectorAux2 = parseInt(vector1[i].toString());
                sumaVectores.push(vectorAux1 + vectorAux2);
            }
        }
        else {
            return "Los vectores no tienen el mismo numero de elementos";
        }
        return sumaVectores;
    };
    /**
     * subs
     */
    Vector.prototype.subs = function (vector1) {
        var restaVectores = [];
        var vectorAux1;
        var vectorAux2;
        if (vector1.length == this.elements.length) {
            for (var i = 0; i < vector1.length; i++) {
                vectorAux1 = parseInt(this.elements[i].toString());
                vectorAux2 = parseInt(vector1[i].toString());
                restaVectores.push(vectorAux1 - vectorAux2);
            }
        }
        else {
            return "Los vectores no tienen el mismo numero de elementos";
        }
        return restaVectores;
    };
    /**
     * mult
     */
    Vector.prototype.mult = function (vector1) {
        var multiplicaVectores = [];
        var vectorAux1;
        var vectorAux2;
        if (vector1.length == this.elements.length) {
            for (var i = 0; i < vector1.length; i++) {
                vectorAux1 = parseInt(this.elements[i].toString());
                vectorAux2 = parseInt(vector1[i].toString());
                multiplicaVectores.push(vectorAux1 * vectorAux2);
            }
        }
        else {
            return "Los vectores no tienen el mismo numero de elementos";
        }
        return multiplicaVectores;
    };
    /**
     * multNumber
     */
    Vector.prototype.multNumber = function (number) {
        var vectoresMultiplicados = [];
        for (var i = 0; i < this.elements.length; i++) {
            vectoresMultiplicados.push(parseInt(this.elements[i].toString()) * number);
        }
        return vectoresMultiplicados;
    };
    return Vector;
}());
exports.Vector = Vector;
