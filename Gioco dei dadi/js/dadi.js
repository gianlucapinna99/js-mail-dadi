"use strict"

//Array con 6 possibilità dado

const diceValues = [1, 2, 3, 4, 5, 6];

//Prendo 2 valori a caso 

const user = diceValues[Math.floor(Math.random() * diceValues.length)];
const computer = diceValues[Math.floor(Math.random() * diceValues.length)];

//Stampo i valori 
console.log("user=" + user)
console.log("computer=" + computer)

//Determino il numero più alto e stampo il messaggio

if (user === computer) {
//Utente e computer hanno lo stesso valore
    console.log("Pareggio")
} else if (user < computer){
//Computer ha un valore più alto
    console.log("Ha vinto il Computer")
} else {
//Utente ha un valore più alto
    console.log("Hai vinto!")
}