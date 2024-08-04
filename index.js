document.querySelector("button").addEventListener("click", function (event) {
    randomizer();
})

// Detecting Keyboard presses
document.addEventListener("keydown", function (event) {
    if (event.key === "r" || event.key === "R") {
        randomizer();
    }
});

function randomizer() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage1 = "../Dicee Challenge - Starting Files/images/dice" + randomNumber1 + ".png";

    var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);


    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage2 = "../Dicee Challenge - Starting Files/images/dice" + randomNumber2 + ".png";

    var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins"
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 wins"
    } else {
        document.querySelector("h1").innerHTML = "Match draw"
    }
}


/* if (randomNumber1 == 1) {
    document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src","../Dicee Challenge - Starting Files/images/dice1.png");
} else if (randomNumber1 == 2) {
    document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src","../Dicee Challenge - Starting Files/images/dice2.png");
} else if (randomNumber1 == 3) {
    document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src","../Dicee Challenge - Starting Files/images/dice3.png");
} else if (randomNumber1 == 4) {
    document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src","../Dicee Challenge - Starting Files/images/dice4.png");
} else if (randomNumber1 == 5) {
    document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src","../Dicee Challenge - Starting Files/images/dice5.png");
} else if (randomNumber1 == 6) {
    document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src","../Dicee Challenge - Starting Files/images/dice6.png");
} */