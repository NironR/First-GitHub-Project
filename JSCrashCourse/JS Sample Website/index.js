/*
firstCard = 10
secondCard = 4
cards = [firstCard, secondCard]
sum = firstCard + secondCard
hasBlackjack = false
isAlive = true
message = ""
sumEl = document.getElementById ("sum-el")
messageEl = document.getElementById( "message-el")
sumEl = document.getElementById ( "sum-el")
cardsEl = document.getElementById ("cards-el")

function startGame() {
    renderGame ()
}

function renderGame(){
    cardsEl.textcontent = "Cards: "
    for (let i= 0; i < cards.length; i++) {
    }
    
    sumEl.textcontent= "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textcontent = message
    
} 

function newCard () {
    let card = 6
    sum += card
    cards.push (card)
    console.log (cards)
    renderGame ()
}
    
*/

player1Time = 102
player2Time = 107

/* function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

fastestRace = getFastestRaceTime()

console.log(getFastestRaceTime())

*/

function getTotalRaceTime() {
    return player1Time + player2Time
}

totalTime = getTotalRaceTime ()

console.log(totalTime)


    
    
    