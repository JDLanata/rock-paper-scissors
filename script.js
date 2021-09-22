// window.alert("Welcome to Rock, Paper, Scisors")

// var userChoice = prompt("Choose Rock, Paper, ror Scissors");

    var option = ["rock", "paper","scissors"];

    // var score = (win, lose, tie)

    var compChoice = option[Math.floor(Math.random()*3)];


function play(){
    window.alert("Welcome to Rock, Paper, Scisors");
    var userChoice = prompt("Choose Rock, Paper, ror Scissors");
    if (userChoice.toLowerCase() == compChoice) {
        window.alert("USer Tie")
        
    }else if (userChoice.toLowerCase() ==  "rock" && compChoice == "scissors" || userChoice.toLowerCase() ==  "paper" && compChoice == "rock" || userChoice.toLowerCase() ==  "scissors" && compChoice == "paper"){
        window.alert("User Win")
    }
    else{
        window.alert("you lost")
    }
    play()
} play()
    