const jsdom = require("jsdom");
const { JSDOM } = jsdom;


let firstCard = 1
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let sumEl = document.getElementById ("sum-el")
let messageEl = document.getElementById( "message-el")
console.log (sumEl)

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else { 
        message = "Busted! You're out of the game!"
        isAlive = false
    }
    }
    
    sumEl.textContent = "Sum: 14"
    
    
    /*document.getElementById("num1-el").textContent = firstCard
    document.getElementById("num2-el").textContent = secondCard
    document.getElementById("sum-el").textContent = sum */