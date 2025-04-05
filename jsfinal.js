// This is the final version. I seperated different parts of the code into fuctions and just called the functions in order at the end.


// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// -Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.

//Part 1 - Create Deck

const labels = ['Ace', 'Two', 'Three','Four','Five','Six','Seven','Eight', 'Nine','Ten', 'Jack', 'Queen', 'King']
const suits = ['Hearts ❤️','Diamonds 💎','Spades 🗡️', 'Clubs 🍀'];
let newDeck = [];
let shuffledDeck = []
let rando = 0
let player1Deck = [];    //Declaring all constants and variables at start
let player2Deck = [];
let player1Score = 0;
let player2Score = 0;
let roundNo = 1;

function createDeck() {  // a function to create an array of objects representing a new deck of 52 cards in order.

    class Card {
        constructor(label, suit, value) { 

        /* I used a label attribute and a value because ace, jack, queen, king don't have numerical values for the program to compare in a later step but I don't want users (or myself) to see one of hearts or 12 of spades etc.  */
           
            this.label = label;
            this.suit = suit;
            this.value = value;
            }
        }
        for(k=0;k<4;k++){ //This for loop iterates through the four suits
            for(i=1;i<=13;i++) { //This for loop iterates through the 13 values in each suit
            tempCard = new Card(labels[i-1], suits[k], i);
        
            newDeck.push(tempCard); //Makes a new array that contains one of each of the 52 cards in order
            }
        }
//console.log(newDeck);
    }

//Part 2 - Shuffle Deck

function shuffleCards(newDeck) {  // a function to move the cards from the newDeck array in 'random' order into a new array
    while(newDeck.length > 0) { //continues until there are no cards left in newDeck
        rando = Math.floor(Math.random() * newDeck.length); //defines a random integer between 0 and current length of newDeck array
        shuffledDeck.push(newDeck[rando]); //adds object at index defined by random number to shuffedDeck array
        newDeck.splice(rando,1); //removes this object from newDeck array 
    }
    //console.log(shuffledDeck);
}

//Part 3 - Deal Cards

function dealCards(shuffledDeck) { // a function to deal cards from shuffledDeck into two new arrays
    while(shuffledDeck.length > 0) { //continues until there are no elements left in shuffledDeck array
        player1Deck.push(shuffledDeck[0]); //copies element at index 0 to player1Deck
        player2Deck.push(shuffledDeck[1]); //copies element at index 1 to player2Deck
        shuffledDeck.splice(0,2); // removes index 0 and 1 from shuffledDeck moving all remaining elements down 2 indices.
    }
    //console.log(player1Deck, player2Deck, shuffledDeck);
}


//Part 4 - Play Game

function playGame(player1Deck, player2Deck) {  // a function to play the game of war and keep score
    while(player1Deck.length > 0 && player2Deck.length > 0) { //continues until both players are out of cards
   
        let player1Card = player1Deck[0]; //assigns object at index 0 to player card
        let player2Card = player2Deck[0];
    
        console.log(`-----------------------------------------------------------
Round ${roundNo}. Player 1: ${player1Card.label} of ${player1Card.suit}, - Player 2: ${player2Card.label} of ${player2Card.suit}`)
    
        if(player1Card.value > player2Card.value) { //compares value of player1Card against value of player2Card
            player1Score++;
            console.log(`   Player 1 won this round!`)
        }
        else if(player1Card.value < player2Card.value) {
            player2Score++;
            console.log(`   Player 2 won this round!`)
        }
        else {
            console.log(`   This round is a tie. No points are awarded.`)
        };
        console.log(`The score is now -- Player 1: ${player1Score}, Player 2: ${player2Score}`) //logs out current score
    
        player1Deck.splice(0,1); //removes the index 0 card and moves the rest down 1
        player2Deck.splice(0,1);
        roundNo++                //iterates the round number
    }
    console.log('--------------------------------------------------------------------------------------------------') //Displays final score and winner message
    if(player1Score > player2Score) {
        console.log(`Game Over! Player 1 Wins! The final score was Player 1: ${player1Score}, Player 2: ${player2Score}.`)
    }
    else if(player1Score < player2Score) {
        console.log(`Game Over! Player 2 Wins! The final score was Player 1: ${player1Score}, Player 2: ${player2Score}.`)
    }
    else {
        console.log(`The game has ended in a tie. The final score was Player 1: ${player1Score}, Player 2: ${player2Score}.`)
    }
}
//calling functions in order to run the program
    createDeck();
    shuffleCards(newDeck);
    dealCards(shuffledDeck);
    playGame(player1Deck, player2Deck);

// The End