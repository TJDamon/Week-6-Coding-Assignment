//Set up our cards and their properties.
class Card {

    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

//Set up our deck of 52 cards (including creation and shuffling). 
class Deck {

    constructor() {
        this.cards = [];    
    }      

    createDeck() {

        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }

    shuffleDeck() {
       let location1, location2, tmp;
       for (let i = 0; i < 1000; i++) {
           location1 = Math.floor((Math.random() * this.cards.length));
           location2 = Math.floor((Math.random() * this.cards.length));
           tmp = this.cards[location1];
           this.cards[location1] = this.cards[location2];
           this.cards[location2] = tmp;
        }
    }
}

//Setting up our players.  I'm only placing their names in gameboard.start as I couldn't get my prompt to work correctly.
class Player {

    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}

//THE GAME!!!
class Board {

    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }

    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();    
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);

        let playerOneSum = 0;
        let playerTwoSum = 0;

        for (let i = 0; i < this.players[0].playerCards.length; i++) {
            if (this.players[0].playerCards[i].value > this.players[1].playerCards[i].value) {
                playerOneSum = playerOneSum + 1      
            } else if (this.players[0].playerCards[i].value < this.players[1].playerCards[i].value) {
                playerTwoSum = playerTwoSum + 1
            }
        }

        if (playerOneSum > playerTwoSum) {
            alert('Player One Wins! \n Player One: ' + playerOneSum + '\n  Player Two: ' + playerTwoSum);
        } else if (playerOneSum < playerTwoSum) {
            alert('Player Two Wins! \n Player One: ' + playerOneSum + '\n  Player Two: ' + playerTwoSum);
        } else alert('Draw!')
    }
}

let gameBoard = new Board();
gameBoard.start('Player One', 'Player Two');
console.log(gameBoard.players);