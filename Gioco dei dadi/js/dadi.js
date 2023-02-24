"use strict"

//Array con 6 possibilità dado

diceValues = [1, 2, 3, 4, 5, 6];

//Prendo 2 valori a caso 

const user = diceValues [Math.random() * diceValues.lenght];
const computer = diceValues [Math.random() * diceValues.lenght];


console.log("user=" + user)
console.log("computer=" + computer)
//Determino il numero più alto e stampo il messaggio

if (user === computer) {
    console.log("Pareggio")
} else if (user < computer){
    console.log("Ha vinto il Computer")
} else {
    console.log("Hai vinto!")
}