
//This is my first attempt where I just coded straight through. Please see jsfinal.js for final version.



// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// -Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.


//Part 1 - Create Deck

class Card {
    constructor(label, suit, value) {
        this.label = label;
        this.suit = suit;
        this.value = value;
    }


}
labels = ['Ace', 'Two', 'Three','Four','Five','Six','Seven','Eight', 'Nine','Ten', 'Jack', 'Queen', 'King']
suits = ['Hearts ❤️','Diamonds 💎','Spades 🗡️', 'Clubs 🍀'];
newDeck = [];

for(k=0;k<4;k++){
    for(i=1;i<=13;i++) {
    tempCard = new Card(labels[i-1], suits[k], i);

    newDeck.push(tempCard);

    }
}
//console.log(newDeck);


//Part 2 - Shuffle Deck

shuffledDeck = []
rando = 0
while(newDeck.length > 0) {
   rando = Math.floor(Math.random() * newDeck.length);
   shuffledDeck.push(newDeck[rando]);
   newDeck.splice(rando,1);

}

//console.log(shuffledDeck);

//Part 3 - Deal Cards

player1Deck = [];
player2Deck = [];
while(shuffledDeck.length > 0) {
    player1Deck.push(shuffledDeck[0]);
    player2Deck.push(shuffledDeck[1]);
    shuffledDeck.splice(0,2);
}

//console.log(player1Deck, player2Deck, shuffledDeck);

//Part 4 - Play Game

player1Score = 0;
player2Score = 0;
roundNo = 1;
while(player1Deck.length > 0 && player2Deck.length > 0) {
   
    player1Card = player1Deck[0];
    player2Card = player2Deck[0];

    console.log(`-----------------------------------------------------------
    Round ${roundNo}. Player 1: ${player1Card.label} of ${player1Card.suit}, - Player 2: ${player2Card.label} of ${player2Card.suit}`)

    if(player1Card.value > player2Card.value) {
        player1Score++;
        console.log(`Player 1 won this round!`)
    }
    else if(player1Card.value < player2Card.value) {
        player2Score++;
        console.log(`Player 2 won this round!`)
    }
    else {
        console.log(`This round is a tie. No points are awarded.`)
    };
    console.log(`The score is now -- Player 1: ${player1Score}, Player 2: ${player2Score}`)

    player1Deck.splice(0,1);
    player2Deck.splice(0,1);
    roundNo++
}
console.log('--------------------------------------------------------------------------------------------------')
if(player1Score > player2Score) {
    console.log(`Game Over! Player 1 Wins! The final score was Player 1: ${player1Score}, Player 2: ${player2Score}.`)
}
else if(player1Score < player2Score) {
    console.log(`Game Over! Player 2 Wins! The final score was Player 1: ${player1Score}, Player 2: ${player2Score}.`)
}
else {
    console.log(`The game has ended in a tie. The final score was Player 1: ${player1Score}, Player 2: ${player2Score}.`)
}
