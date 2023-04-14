"use strict";
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🙌 Correct Number!';



document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector(".number").textContent = secretNumber;
document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highscore;
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "😅 No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🙌 Well done !";
    ++score;
    ++highscore;
    console.log(score);
    document.querySelector(".score").textContent = score;
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬇️ Too high !";
      --score;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "❌ YOU LOST !";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬆️ Too low !";
      --score;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "❌ YOU LOST !";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});
