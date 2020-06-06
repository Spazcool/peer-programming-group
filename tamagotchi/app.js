const Dog = require("./Dog.js");
const Cat = require("./Cat");
const Inquirer = require("inquirer");

const Scruffy = new Dog('Scuffy', 100, 3, 5);
const Mittens = new Cat('Mittens', 100, 3, 5);

let value =
    {
        type: 'list',
        name: 'attack',
        message: "Which attack: ",
        choices: ["sonicBark", "attack", "sonicMeow"]
    };

function recursive(){
    Inquirer.prompt(value).then((answers) => {
        if(answers.attack === "sonicBark"){
            Scruffy.sonicBark(Mittens)
        }
        if(answers.attack === "attack"){
            Scruffy.attack(Mittens)
        }
        if(answers.attack === "sonicMeow"){
            Scruffy.sonicMeow(Mittens)
        }
    })
    .then(() => {
        if(Mittens.health > 0){
            recursive();
        }
    })

}

recursive()