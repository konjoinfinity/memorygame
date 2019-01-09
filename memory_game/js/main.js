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

var reset = function () {
  for (var i = 0; i < cards.length; i++) {
    document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
};

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click' , flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

var checkForMatch = function() {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
      console.log("You found a match!");
      alert("You found a match!");
      this.setAttribute('src' , (cards[cardId].cardImage));
      reset();
    }   else {
        console.log("Sorry, try again.");
        alert("Sorry, try again.");
        this.setAttribute('src' , (cards[cardId].cardImage));
        reset();
      }
  }

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId]);
  this.setAttribute('src' , (cards[cardId].cardImage));
  console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
  if (cardsInPlay.length === 2) {
  }
  checkForMatch();
}

createBoard();
