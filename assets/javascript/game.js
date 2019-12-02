//Creating variables to hold player values
var wins = 0;
var livesCount = 15;
var badPool = [];
 
//Creating variables for HTML references
var winText = document.getElementById('win-text');
var underscoreText = document.getElementById('underscore-text');
var guessText = document.getElementById('guess-text');
var wrongText = document.getElementById('wrong-text');

//Array of video game titles
var wordOptions = ["mario","doom","overwatch","tetris","minecraft","pacman","halo","skyrim","donkey kong","sims"];



//Writing starting stats
var guessText = document.getElementById('guess-text');
    guessText.innerHTML = livesCount;
var winText = document.getElementById('win-text');
    winText.innerHTML = wins;

//Player starts game by pressing key
document.onkeyup = function(){
    var firstWord = "";
    var secondWord = "";
    //Initializing game 
    //Randomly choose word element
    var wordPicker = function(first,second) {
        if (second === undefined) {
            firstWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
            return 
        }
        if(second) {
            secondWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
        return(first,second);
        }
    }
    
    //First game word
    var playerWord = wordPicker(2);
    console.log(playerWord);
    
    

    
    //Create underscores based on playerWord length
    var lengthDisplay = [];
    for (var i = 0; i < playerWord.length; i++) {
        lengthDisplay[i] = "_";
    }
    var underscoreWrite = document.getElementById('underscore-text');
        underscoreWrite.innerHTML = lengthDisplay.join(" ");
    
    

    //This reads for every player click after the first
    document.onkeyup = function() { 
        
        //Stores player input in variable
        var playerGuess = event.key;
        var playerGuessCode = event.keyCode;
        
        //Checking if player input is a letter 
        if (playerGuessCode > 64 && playerGuessCode < 91 && wins === 0) {
            
           
            
            //Game winning function returns boolean
            var winCheck = function(a){
                    return a !== "_";
            }
            function newGame(){
                alert("You won!");
                wins++;
                $("underscore-text").empty();
                playerWord1 = wordOptions[Math.floor(Math.random() * wordOptions.length)];;
                for (var i = 0; i < wordPicker(second).length; i++) {
                    lengthDisplay[i] = "_";
                }
                var underscoreWrite = document.getElementById('underscore-text');
                    underscoreWrite.innerHTML = lengthDisplay.join(" ");
                
                
            }
            
        
            //Sets boolean to prevent wrong answers from looping
            var wrongCheck1 = false;
            
            //Check if playerGuess matches and replace underscores
            for (var i = 0; i < playerWord.length; i++) {
                if (playerGuess === playerWord[i]) {
                    lengthDisplay[i] = playerGuess;
                    wrongCheck1 = true;
                    //Uses boolean to see if player has won
                    if(lengthDisplay.every(winCheck)===true){
                        newGame(wordOptions[Math.floor(Math.random() * wordOptions.length)]);
                        

                    }
                }
            }
            //Checks if input is already in array before subtracting life
            if (!(wrongCheck1)) {                
                if (badPool.indexOf(playerGuess) === -1) {                    
                    livesCount--;
                    badPool.push(playerGuess);
                }
                //Resets page and informs player they lost
                if (livesCount === 0) {
                    alert("Whoops! Try again!");
                    document.location.reload();
                }
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
