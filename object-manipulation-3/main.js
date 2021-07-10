console.log('Lodash is loaded:', typeof _ !== 'undefined');
// player generation
// there are going to be four players that I need to account for, noting name and hand
// i could create four different profiles for them
// since they are the same type of player in that they each will have two properties, there is a lot of repetition
var players = [];
var names = ['paul', 'heesoo', 'isaac', 'denny'];
for (var i = 0; i < 4; i++) {
  players.push({ name: names[i], hand: null });
}

// card deck generation
// it would make sense and it would be simple to store these in an ordered list such as an array
// like the players, this is a matter of repetition for similar features
// the difference is that there are 13 ranks and 4 suits to consider, which i can loop through both
// by using nested for loops, i can generate all the suits of a rank and then move onto the next rank
// i will add each new card to my card deck as i progress
function generateDeck() {
  var standardDeck = [];
  var cardRank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  var cardSuit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  for (var rank = 0; rank < 13; rank++) {
    for (var suit = 0; suit < 4; suit++) {
      standardDeck.push({ rank: cardRank[rank], suit: cardSuit[suit] });
    }
  }
  return standardDeck;
}

// card shuffling
// i will want to generate a new deck entirely but i can copy from my regular deck
// this new deck will need to be composed of the standard deck but with the cards in a random order
// i also need to make sure that the cards are not duplicated
function shuffleDeck() {
  var deck = generateDeck();
  var randomDeck = [];
  while (deck.length > 0) {
    var alreadyIncluded = false;
    var randomIndex = _.random(deck.length - 1);
    for (var k = 0; k < randomDeck.length; k++) {
      if (deck[randomIndex] === randomDeck[k]) {
        alreadyIncluded = true;
      }
    }
    if (alreadyIncluded === false) {
      randomDeck.push(deck[randomIndex]);
      deck = _.pull(deck, deck[randomIndex]);
    }
  }
  return randomDeck;
}

// dealing cards
// when i deal cards to the players, i need to deal them two cards each and they need to be random cards
// if i start with a totally randomized deck, then i can just give the first eight cards to the four players and each card will be different and unique
function dealCards(individuals) {
  var playersWithCards = individuals;
  var playingCards = shuffleDeck();
  var cardCount = 0;
  for (var playerHand = 0; playerHand < 4; playerHand++) {
    playersWithCards[playerHand].hand = [playingCards[cardCount], playingCards[cardCount + 1]];
    cardCount = cardCount + 2;
  }
  return playersWithCards;
}

// find the player with the highest score
// i need to score each hand
// i need to give number values to each rank, not suit
// i need to find a way to find a way to compare each rank easily
// i can generate an object that has all the card ranks and their corresponding points
// i then need to access the ranks of each person's hands and sum them

function calculateScore(player) {
  var scores = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    Jack: 10,
    Queen: 10,
    King: 10,
    Ace: 11
  };
  var playerScore = 0;
  for (var playerCards = 0; playerCards < 2; playerCards++) {
    for (var playerScores in scores) {
      if (player.hand[playerCards].rank === playerScores) {
        playerScore += scores[playerScores];
      }
    }
  }
  return playerScore;
}

// i want to incorporate all my functions together now to create the game
// this function not go into any of the optional parts of the challenge
// instead, the function will only return the winner of the current game
function someonesDeck() {
  var livePlayers = dealCards(players);
  var highestScore = 0;
  var winningPlayer = '';
  for (var drawHand = 0; drawHand < livePlayers.length; drawHand++) {
    var currentScore = calculateScore(livePlayers[drawHand]);
    if (highestScore < currentScore) {
      highestScore = currentScore;
      winningPlayer = livePlayers[drawHand].name;
    }
  }
  console.log('the winner is: ', winningPlayer);
  console.log('their score was: ', highestScore);
}

someonesDeck();

// there is quite a lot of moving parts to this algorithm
// i need to break it down into pieces if i want to have a chance at making something work
