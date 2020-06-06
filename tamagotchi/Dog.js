const DigitalPal = require("./DigitalPal.js");

class Dog extends DigitalPal{
    constructor(name, health, strength, defense){
        super(name, health, strength, defense)
    }

    sonicBark(opponent){
        opponent.defense -= 1;
        console.log(`${this.name} sonicBarks ${opponent.name}\n${opponent.name} defense is now ${opponent.defense}`)
    }
}
module.exports = Dog;