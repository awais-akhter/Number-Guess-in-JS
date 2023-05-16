var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");


var answer = Math.floor(Math.random()*100 + 1 );
var no_of_guess = 0;
var guessed = [];

function play(){
    var userGuess = document.getElementById("guess").value;
    
    if(userGuess < 1 || userGuess > 100){
        alert("Please enter a number between 1 and 100");
    }else {
        guessed.push(userGuess);
        no_of_guess ++;
        if (userGuess < answer){
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No of Guesses: " + no_of_guess;
            msg3.textContent = "Guessed Nos: " + guessed;
        }else if (userGuess > answer){
            msg1.textContent = "Your guess is too high.";
            msg2.textContent = "No of Guesses: " + no_of_guess;
            msg3.textContent = "Guessed Nos: " + guessed;
        }else if (userGuess == answer){
            msg1.textContent = "Yippie! You have Won.";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed in " + no_of_guess + " attempts.";

        } 
    }
}