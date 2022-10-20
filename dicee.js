var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

var header = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    header.innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    header.innerHTML = "Player 2 wins!";
} else {
    header.innerHTML = "DRAW!";
}
