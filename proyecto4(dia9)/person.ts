export class Person {
    public name: string;
    public age: number;
    private address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    /**
     * printName
     */
    public printName() {
        console.log(this.name);
    }

    /**
     * yearOfBirth
     */
    public yearOfBirth(anyoActual: number) {
        var anoNacimiento: number;
        anoNacimiento = anyoActual - this.age;
        return anoNacimiento;
    }

    /**
     * setAddress
     */
    public setAddress(address: string) {
        this.address = address;
    }

    /**
     * getAddress
     */
    public getAddress() {
        return this.address;
    }

    /**
     * arrayAtributos
     */
    public arrayAtributos() {
        var persona1 = [];

        persona1.push(this.name,this.age,this.address);
        return persona1;
    }

}


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