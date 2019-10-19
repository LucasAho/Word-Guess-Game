//Creating variables to hold player values
var wins = 0;
var livesCount = 15;

//Creating variables for HTML references
var winText = document.getElementById('win-text');
var underscoreText = document.getElementById('underscore-text');
var guessText = document.getElementById('guess-text');
var wrongText = document.getElementById('wrong-text');

//Array of video game titles
var wordOptions = ["mario","doom","overwatch","tetris","minecraft","pacman","halo"];



//Writing starting stats
var guessText = document.getElementById('guess-text');
    guessText.innerHTML = livesCount;
var winText = document.getElementById('win-text');
    winText.innerHTML = wins;

//Player starts game by pressing key
document.onkeyup = function(){
    
   //Initializing game 
    //Randomly choose word element
    var wordPicker = function() {
        var random = wordOptions[Math.floor(Math.random() * wordOptions.length)];
        return(random);
    }
    
    var playerWord = wordPicker();
    //Create underscores based on playerWord length
    var lengthDisplay = [];
    for (var i = 0; i < playerWord.length; i++) {
        lengthDisplay[i] = "_";
    }
    var underscoreWrite = document.getElementById('underscore-text');
        underscoreWrite.innerHTML = lengthDisplay.join(" ");
    
   //Game code runs within this
    //This reads for every player click after the first
    document.onkeyup = function() { 
        
        //Stores player input in variable
        var playerGuess = event.key;
        var playerGuessCode = event.keyCode;
        
        //Checking if player input is a letter 
        if (playerGuessCode > 64 && playerGuessCode < 91) {
            console.log(playerGuessCode);

            //Boolean prevents for loop from activating every iteration
            var subtractLife = false;
        
        //Pool of incorrect guesses    
            var badPool = ["Incorrect Letters Go Here"];
            
            //Game winning function returns boolean
            var winCheck = function(a){
                return a !== "_";
            }

            //Check if playerGuess matches and replace underscores
            for (var i = 0; i < playerWord.length; i++) {
                if (playerGuess === playerWord[i]) {
                    lengthDisplay[i] = playerGuess;
                    subtractLife = true;
                    //Uses boolean to see if player has won
                    if(lengthDisplay.every(winCheck)===true){
                        alert("You won!");
                        
                        wordPicker();
                        wins.start ++;
                    }
                }
                
            }
            //Subtracts one life from incorrect guess
            if(!subtractLife) {
                livesCount--;
            }
        
            
            //Rewrites variable values for player interface
            var underscoreWrite = document.getElementById('underscore-text');
                underscoreWrite.innerHTML = lengthDisplay.join(" ");
            var guessText = document.getElementById('guess-text');
                guessText.innerHTML = livesCount;
            var wrongText = document.getElementById('wrong-text');
                wrongText.innerHTML = badPool;
            var winText = document.getElementById('win-text');
                winText.innerHTML = wins;
        
        }
    }
}




/*Creates the pool of wrong guesses and takes off from the counter
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
            var wrongWrite = document.getElementById('guessPool-text');
                wrongWrite.innerHTML = guessPool;
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
*/
