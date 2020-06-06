class DigitalPal{
    constructor(name, health, strength, defense){
        this.name = name
        this.health = health;
        this.strength = strength;
        this.defense = defense;
    }

    attack(opponent){
        opponent.health -= 10 + this.strength - opponent.defense;
        console.log(`${this.name} attacks ${opponent.name}\n${opponent.name} health is now ${opponent.health}`)
    }
} 

module.exports = DigitalPal;