//console.log("Up and running!");
//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);

//array of cards//
//var cards = ["queen", "queen", "king", "king"];

//Creating an object for each card that will store that card's name, the suit, and a path to where the image for that card is stored in our project.//
//Add some extra information to each card by storing an object for each card in our cards array.//
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

//For holding the cards that are in play//
var cardsInPlay = [];

//First you'll create a function that will store all steps related to selecting, or flipping over, a card. When the user flips a card over, you'll want to add that card to the array of cards that are in play. If the user has flipped over two cards, you'll want to check for a match.//

//Second, you'll create a function to group together the logic to check to see if the two cards that the user has flipped over match each other. You'll provide feedback to the user letting them know if the two cards match, or if they should try again.//

//a function to store the steps to check for a match.//
//var checkForMatch = function() {
//this.setAttribute('src',cards[cardId].cardImage);
//if(cardsInPlay.length === 2) 
// {
//if(cardsInPlay[0] === cardsInPlay[1]) 
//  {alert("You found a match!");
  //  } 
 // else 
 // {alert("Sorry, try again.");
//    }
// }
//}

//Store all steps that should happen when the user flips a card.//
var flipCard = function() { 
  var cardId = this.getAttribute('data-id');
  //console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
    //console.log(cards[cardId].cardImage);
  //console.log(cards[cardId].suit);
 // checkForMatch();
 this.setAttribute('src',cards[cardId].cardImage);
if(cardsInPlay.length === 2) {
if(cardsInPlay[0] === cardsInPlay[1]) 
  {
  alert("You found a match!");
  } 
  else 
  {
  alert("Sorry, try again.");
  }
 }
}

//Create a new game board, ad
var createBoard = function() 
{
  for (var i = 0; i < cards.length; i++) 
  {
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src', 'images/back.png');
  cardElement.setAttribute('data-id', i);
  cardElement.addEventListener('click', flipCard);
  document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();

//flipCard(0);
//flipCard(2);

//Representing the 1st card that the user has flipped//
//Storing the 1st item in the cards array//
//var cardOne = cards[0];

//Adding this first card to the cards in play//
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne);

//Representing the 2nd card that the user has flipped//
//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardTwo);

//Check if 2 cards that had been played are the same//
//if (cardsInPlay.length === 2) {
//  if (cardsInPlay[0] === cardsInPlay[1]){
//  alert("You found a match!");
//  } else {
//  alert("Sorry, try again.");
//  }
//  }
