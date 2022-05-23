let player = {
    name: "Ryan Norin",
     chips: 150, 
 }
 
 cards = []
 sum = 0
 hasBlackjack = false
 isAlive = false
 message = ""
 messageEl = document.getElementById( "message-el")
 sumEl = document.getElementById ( "sum-el")
 cardsEl = document.getElementById ("cards-el")
 let playerEl = document.getElementById ("player-el")
     
 playerEl.textContent = player.name + ": $" + player.chips
 
 function startGame() {
     isAlive = true
     firstCard = getRandomCard()
     secondCard = getRandomCard()
     cards = [firstCard, secondCard]
     sum = firstCard + secondCard
      renderGame()
 }
 
 function getRandomCard() {
     let randomNumber = Math.floor ( Math.random()*13) + 1
 return randomNumber
 if (randomNumber === 1) {
     return 11
 } else if (randomNumber > 10) {
     return 10
 }
 
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
     if (isAlive === true || hasBlackjack === false ) {
         let card = getRandomCard()
     sum += card
     cards.push (card)
     console.log (cards)
     renderGame ()
     }
     
 }
     
 
 
 
 
     
     
     