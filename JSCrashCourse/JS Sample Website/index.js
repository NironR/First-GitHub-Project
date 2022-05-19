let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard


document.getElementById("num1-el").textContent = firstCard
document.getElementById("num2-el").textContent = secondCard
document.getElementById("sum-el").textContent = sum

if (sum < 21) {
    console.log ("Would you like to draw a new card?")
} else if (sum === 21) {
    console.log ("Woohoo! You've got Blackjack!")
} else if (sum > 21) {
    console.log ("You're out of the game! Tough luck!")
}







