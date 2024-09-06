"use strict";
let score = 20;
let x = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
// document.querySelector(".number").textContent = x;
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct number";
document.querySelector(".check").addEventListener("click", function () {
  if (score > 0) {
    const xy = Number(document.querySelector(".guess").value);
    if (!xy) {
      document.querySelector(".message").textContent = "No Number";
    } else if (xy === x) {
      document.querySelector(".message").textContent =
        "Yes Your guess is right";
      document.querySelector("body").style.backgroundColor = "orange";
      document.querySelector(".number").textContent = x;
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (xy > x) {
      document.querySelector(".message").textContent = "Guess is too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Guess is too low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "You Lost!";
    document.querySelector(".score").textContent = 0;
  }
});
document.querySelector(".again").addEventListener("click", function () {
  x = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
console.log("HI");
