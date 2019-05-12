//Variables
var numberOfWins = [0];
var numberOfLosses =[0];
var goalRandomNumber = "";
var crystalNumOne = "";
var crystalNumTwo = "";
var crystalNumThree = "";
var crystalNumFour = "";

//Goal Random Number Generator
goalRandomNumber = Math.floor((Math.random() * 120) + 19);

$("#random-number").text("Target Score: " + goalRandomNumber);

//Crystal Random Number Generator
crystalNumOne = Math.floor((Math.random() * 12 ) + 1);   
crystalNumTwo = Math.floor((Math.random() * 12 ) + 1);   
crystalNumThree = Math.floor((Math.random() * 12 ) + 1);   
crystalNumFour = Math.floor((Math.random() * 12 ) + 1);  

//Win Game and Reset
function comparisonCheck(){
    if (userScore === goalRandomNumber){
    (numberOfWins++);
    $("#number-of-wins").text("Wins: " + numberOfWins);
    goalRandomNumber = Math.floor((Math.random() * 120) + 19);
    $("#random-number").text("Target Score: " + goalRandomNumber);
    userScore = 0;
    $("#current-score").text(userScore)
    //Reset Crystal Values
    crystalNumOne = Math.floor((Math.random() * 12 ) + 1);   
    crystalNumTwo = Math.floor((Math.random() * 12 ) + 1);   
    crystalNumThree = Math.floor((Math.random() * 12 ) + 1);   
    crystalNumFour = Math.floor((Math.random() * 12 ) + 1); 
    }
    
    //Lose Game and Reset
    else if (userScore > goalRandomNumber){
    (numberOfLosses++);
    $("#number-of-losses").text("Losses: " + numberOfLosses);
    goalRandomNumber = Math.floor((Math.random() * 120) + 19);
    $("#random-number").text("Target Score: " + goalRandomNumber);
    userScore = 0;
    $("#current-score").text(userScore)
    //Reset Crystal Values
    crystalNumOne = Math.floor((Math.random() * 12 ) + 1);   
    crystalNumTwo = Math.floor((Math.random() * 12 ) + 1);   
    crystalNumThree = Math.floor((Math.random() * 12 ) + 1);   
    crystalNumFour = Math.floor((Math.random() * 12 ) + 1); 
    };
}

//User Score
var userScore = 0;
$("#current-score").text(userScore)

//Click and Add Score to User Score.
$("#crystal-one").on("click", function() {
    userScore = userScore + crystalNumOne
    $("#current-score").text(userScore);
    comparisonCheck();
    });

$("#crystal-two").on("click", function() {
    userScore = userScore + crystalNumTwo
    $("#current-score").text(userScore);
    comparisonCheck();
    });

$("#crystal-three").on("click", function() {
    userScore = userScore + crystalNumThree
    $("#current-score").text(userScore);
    comparisonCheck();
    });

$("#crystal-four").on("click", function() {
    userScore = userScore + crystalNumFour
    $("#current-score").text(userScore);
    comparisonCheck();
    });

//Wins and Losses
$("#number-of-wins").text("Wins: " + numberOfWins);
$("#number-of-losses").text("Losses: " + numberOfLosses);