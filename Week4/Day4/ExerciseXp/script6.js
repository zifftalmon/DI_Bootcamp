// console.log([2] === [2]); //false
// console.log({} === {}) //false

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number) //4, passed by reference
// console.log(object3.number) //4, also passed by reference
// console.log(object4.number) //5, passed by value


class Animal {
    constructor (name, type="cat", color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor (nameMamal, typeMamal, colorMamal) {
        super(nameMamal, typeMamal, colorMamal);
    }

    sound(animalSound) {
        console.log(`${animalSound} I am ${this.name} a ${this.color} ${this.type}`)
    }
}

const farmerCow = new Mamal ("lily", "cow", "pink");
farmerCow.sound('moooo')
