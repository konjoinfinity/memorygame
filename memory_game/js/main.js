//console.log("Up and running!");

//var cardOne = "king";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "queen";


//console.log("User flipped " + cardThree);

var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = []
var cardId = [cards[Math.floor(Math.random() * 4)]]
cardsInPlay.push(cards[cardId]);


var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!")
    }   else {
        console.log("Sorry, try again.")
      }
  }

var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit)
  if (cardsInPlay.length === 2) {
    console.log(cardImage)
    console.log(suit)
    checkForMatch();
  }
}

flipCard(3);
flipCard(1);
