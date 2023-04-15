"use strict";
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🙌 Correct Number!';




console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highscore;
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //Si pas de nombre
  if (!guess) {
    document.querySelector(".message").textContent = "😅 No number!";

    // Si nombre parfait
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🙌 Well done !";
    console.log(score);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //NOMBRE TROP HAUT
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬇️ Too high !";
      --score;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "❌ YOU LOST !";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  // NOMBRE TROP BAS
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬆️ Too low !";
      --score;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "❌ YOU LOST !";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
