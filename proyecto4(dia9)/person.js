"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    /**
     * printName
     */
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    /**
     * yearOfBirth
     */
    Person.prototype.yearOfBirth = function (anyoActual) {
        var anoNacimiento;
        anoNacimiento = anyoActual - this.age;
        return anoNacimiento;
    };
    /**
     * setAddress
     */
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    /**
     * getAddress
     */
    Person.prototype.getAddress = function () {
        return this.address;
    };
    /**
     * arrayAtributos
     */
    Person.prototype.arrayAtributos = function () {
        var persona1 = [];
        persona1.push(this.name, this.age, this.address);
        return persona1;
    };
    return Person;
}());
exports.Person = Person;
// Export the named class directly
// export class Foo { };
// Export the named class indirectly
// class Bar { }
// export { Bar }
// // Export an instance of the class directly
// export const foo = new Foo();
// // Export an instance of the class indirectly
// const bar = new Bar();
// export { bar };
