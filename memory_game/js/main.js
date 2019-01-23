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
var cardFlipCount = 0;

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
	document.getElementById("matchmessage").innerHTML = "Win or Lose?";
	cardFlipCount = 0;
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

var cardRankSuitMatch = function() {
	while (cardsInPlay.length <= 4) {
		if (cardsInPlay[0].cardImage === cardsInPlay[1].cardImage) {
			winCounter();
			document.getElementById("matchmessage").innerHTML = "You found a match!";
			console.log("You found a match!");
			break;
		} else {
			if (cardsInPlay[0].cardImage === cardsInPlay[2].cardImage) {
				winCounter();
				document.getElementById("matchmessage").innerHTML = "You found a match!";
				console.log("You found a match!");
				break;
		} else {
				if (cardsInPlay[1].cardImage === cardsInPlay[2].cardImage) {
					winCounter();
					document.getElementById("matchmessage").innerHTML = "You found a match!";
					console.log("You found a match!");
					break;
		} else {
				if (cardsInPlay[0].cardImage === cardsInPlay[3].cardImage) {
					winCounter();
					document.getElementById("matchmessage").innerHTML = "You found a match!";
					console.log("You found a match!");
					break;
		} else {
				if (cardsInPlay[1].cardImage === cardsInPlay[3].cardImage) {
					winCounter();
					document.getElementById("matchmessage").innerHTML = "You found a match!";
					console.log("You found a match!");
					break;
		} else {
						if (cardsInPlay[2].cardImage === cardsInPlay[3].cardImage) {
							winCounter();
							document.getElementById("matchmessage").innerHTML = "You found a match!";
							console.log("You found a match!");
							break;
		} else {
			if (cardsInPlay.length === 4){
				lossCounter();
				document.getElementById("matchmessage").innerHTML = "Sorry, try again.";
				console.log("Sorry, try again.");
				break;
									}
								}
							}
						}
					}
				}
			}
		}
	}

var flipCard = function() {
	cardFlipCount += 1;
	var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId]);
  this.setAttribute('src' , (cards[cardId].cardImage));
  console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
  if (cardsInPlay.length === 2) {
  }
	cardRankSuitMatch();
}

createBoard();
