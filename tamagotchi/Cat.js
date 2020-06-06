const DigitalPal = require("./DigitalPal.js");

class Cat extends DigitalPal{
    constructor(name, health, strength, defense){
        super(name, health, strength, defense)
    }

    sonicMeow(opponent){
        opponent.strength -= 1;
        console.log(`${this.name} sonicMeow ${opponent.name}\n${opponent.name} strength is now ${opponent.strength}`)
    }
}
module.exports = Cat;