//console.log("Up and running!");

//var cardOne = "king";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "queen";


//console.log("User flipped " + cardThree);

var cards = ["queen", "king", "queen", "king"]

var cardsInPlay = []
var cardOne = [cards[0]]
cardsInPlay.push(cardOne);
var cardTwo = [cards[1]]
cardsInPlay.push(cardTwo);

console.log("User flipped queen");
console.log("User flipped king");

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!")
  }   else {
      alert("Sorry, try again.")
    }
}


/*Now we'll want to add logic that checks for equality between the two cards
in the cardsInPlay array.
Inside of the if statement you created in the last step, create an if...else
statement that checks for equality between the two cards in the cardsInPlay array.
For the condition, check to see if the first card in the cardsInPlay array
(cardsInPlay[0]) is equal to the second card in the cardsInPlay array.
HINT: You'll want to use the === operator here.

If values are equal, execute an alert with the message "You found a match!"
alert("You found a match!");
If values are not equal, execute an alert with the message "Sorry, try again."

After saving your main.js file, open the index.html file in Sublime Text, right
click, and open the project in Chrome. The alert "Sorry, try again." should pop up.

Test out storing different cards in the cardOne and cardTwo variables to make
sure that everything is up and running!

Next we'll add logic to check to see if two cards have been played,
because in our final game we will not want to check for a match until
the user has selected two cards.

Write an if statement that checks to see if the length of the cardsInPlay array is 2.
For the condition, you can use the length property to find out how many
items are in the cardsInPlay array and then use the === operator to see if the length is equal to 2.

Now create a variable to represent the second card that the user flipped.

Create a variable cardTwo.
Store the third item in the cards array in the variable cardTwo.
Now we'll want to add this second card to the cardsInPlay array.

Use the push() method to add cardTwo to the end of the cardsInPlay array.
**
Next up, you'll create a variable to represent the first card that the user flipped.
Create a variable cardOne.
Store the first item in the cards array in the variable cardOne.
HINT: Use the array name, square brackets, and the index number to retrieve this card from the array.

Now we'll want to add this first card to the cardsInPlay array.
Use the push() method to add cardOne to the end of the cardsInPlay array.
Here's an example of the push() method if you need a syntax refresher:
ghosts.push('clyde');
**
Open the memory_game folder in Sublime and open the main.js file. You'll be writing code to work
through the following steps in Sublime Text.

In your main.js file, create an array to store the four cards.

Create an array cards.
The array should hold four strings - one for each of our cards.
The strings should be "queen", "queen", "king", and "king".
After creating the cards array, you can delete the variables you created in the last unit's project.
Next we'll want to create an empty array. This will eventually hold the cards that are in play.

Create an array cardsInPlay.
Set its value to an empty array []


Navigate to the main.js file in Sublime.

Create four variables that simulate the cards in your game.

They should be string types.

Two should have a value of "queen", and the other two should have a value of "king".

They will represent your cards (e.g., "queen" card).

Name your variables cardOne, cardTwo, cardThree, and cardFour.

Here's an example of one card:

var cardOne = "queen"; */
