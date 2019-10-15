//Possible words for player to guess
var wordOptions = ["Mario","Doom","Overwatch","Tetris","Minecraft","Pacman","Halo"];

//Variables for default game values
var wins = 0;
var guessCount = 15;

//Create math function to randomly choose element and find it's length
var playerWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

//Displaying the spaces for chosen word
var lengthDisplay = [];
    for (var i = 0; i < playerWord.length; i++) {
        
        lengthDisplay[i] = "_";
    }
    var underscoreWrite = document.getElementById('underscore-text');
    underscoreWrite.innerHTML = lengthDisplay.join(" ");

//Creates the pool of wrong guesses and takes off from the counter
var guessWrong = [];

var countWrite = document.getElementById('guessCount-text');
    countWrite.innerHTML = guessCount;

//Creates the win counter and updates it with wins
var winWrite = document.getElementById('winCount-text');
    winWrite.innerHTML = wins;

//This runs when the player presses a key
document.onkeyup = function(event) {
    
    //Determines which key was pressed
    var playerGuess = event.key;

    for (var j=0; j < playerWord.length; j++){
        
        if (playerWord[j]===playerGuess){
            lengthDisplay[j]=playerGuess;
        }
        if (playerGuess !== playerWord[j]){
            guessWrong.push(playerGuess);
            guessCount --;
            var wrongWrite = document.getElementById('guessWrong-text');
            wrongWrite.innerHTML = guessWrong;
        }
        if (lengthDisplay == playerWord){
            alert("You win!");
            wins++;
        }
        if (guessCount===0){
            alert("You lost, try again!");
        }
        var underscoreWrite = document.getElementById('underscore-text');
            underscoreWrite.innerHTML = lengthDisplay.join(" ");
            
        var countWrite = document.getElementById('guessCount-text');
            countWrite.innerHTML = guessCount;
    }


    
}




//var winCount = document.getElementById("winCount-text");
//var guessCount = document.getElementById("guessCount-text");

//var wins= 0;





//Create pool of guessed letters

