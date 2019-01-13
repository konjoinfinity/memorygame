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
},
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

var winLossCounter = 0;
var cardsInPlay = []

var shuffleCards = function() {
	for (i = 0; i < 88; i++){
		randIndex = Math.floor(Math.random() * cards.length);
		cards.push(cards.splice(randIndex, 1)[0]);
	}
}

var winCounter = function() {
  winLossCounter += 1;
  document.getElementById("score").innerHTML = "Score: " + winLossCounter;
}

var lossCounter = function() {
  winLossCounter -= 1;
  document.getElementById("score").innerHTML = "Score: " + winLossCounter;
}

var resetCards = function() {
  for (var i = 0; i < cards.length; i++) {
  document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
	document.getElementById("matchmessage").innerHTML = " ";
	shuffleCards();
}
cardsInPlay = [];
};

var createBoard = function() {
  shuffleCards();
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click' , flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

var checkForMatch = function() {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank && cardsInPlay[0].suit === cardsInPlay[1].suit) {
			winCounter();
			document.getElementById("matchmessage").innerHTML = "You found a match!";
    }		else {
      	lossCounter();
				document.getElementById("matchmessage").innerHTML = "Sorry, try again.";
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

//test
