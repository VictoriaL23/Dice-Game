// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
// console.log(randomNumber1);

// if (randomNumber1 == 1) {
//   document.querySelector(".img1").setAttribute("src", "images/dice1.png");
// }
// if (randomNumber1 == 2) {
//   document.querySelector(".img1").setAttribute("src", "images/dice2.png");
// }
// if (randomNumber1 == 3) {
//   document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// }
// if (randomNumber1 == 4) {
//   document.querySelector(".img1").setAttribute("src", "images/dice4.png");
// }
// if (randomNumber1 == 5) {
//   document.querySelector(".img1").setAttribute("src", "images/dice5.png");
// }
// if (randomNumber1 == 6) {
//   document.querySelector(".img1").setAttribute("src", "images/dice6.png");
// }

// var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
// console.log(randomNumber2);

// if (randomNumber2 == 1) {
//   document.querySelector(".img2").setAttribute("src", "images/dice1.png");
// }
// if (randomNumber2 == 2) {
//   document.querySelector(".img2").setAttribute("src", "images/dice2.png");
// }
// if (randomNumber2 == 3) {
//   document.querySelector(".img2").setAttribute("src", "images/dice3.png");
// }
// if (randomNumber2 == 4) {
//   document.querySelector(".img2").setAttribute("src", "images/dice4.png");
// }
// if (randomNumber2 == 5) {
//   document.querySelector(".img2").setAttribute("src", "images/dice5.png");
// }
// if (randomNumber2 == 6) {
//   document.querySelector(".img2").setAttribute("src", "images/dice6.png");
// }

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var randomImg = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImg);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

var randomImg2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🚩 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "  Player 2 wins!  🚩 ";
} else {
  document.querySelector("h1").innerHTML = "DRAW!";
}
