function rollDice(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var setImage = "./images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png
document.querySelector("img.img1").setAttribute("src", setImage); 

// same for right side dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var setImage_2 = "./images/dice" + randomNumber2 + ".png"; 
document.querySelector("img.img2").setAttribute("src", setImage_2);

//Change the text in the h1, (which currently says Refresh Me) 
//to show which user won or if there was a draw depending on the 
//dice values of player 1 (left) and player 2 (right).
var new_heading;
if(randomNumber1 > randomNumber2){
    new_heading = "🚩 Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2){
    new_heading = "Player 2 Wins! 🚩";
}
else{
    new_heading ="Draw!"
}
document.querySelector("h1").textContent = new_heading;
}
document.addEventListener("click", rollDice);

    
    


