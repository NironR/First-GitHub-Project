let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""

if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Woohoo! You've got Blackjack!"
    hasBlackjack = true
} else { 
    message = "Busted! You're out of the game!"
    isAlive = false
}

console.log (isAlive)


console.log (message)

/*document.getElementById("num1-el").textContent = firstCard
document.getElementById("num2-el").textContent = secondCard
document.getElementById("sum-el").textContent = sum */