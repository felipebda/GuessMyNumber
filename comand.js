"use strict";

console.log("ta dentro");

//1- Criar variavel score

let score = 20;
let highScore = 0;
console.log(score);

let insertText = function (message) {
  document.querySelector(".message").textContent = message;
};

//2 - Criar variavel do numero aleatório

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber, typeof randomNumber);

//3 - Criar a funcção do botao do usuário
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    insertText("No number.");
  } else if (guess === randomNumber) {
    insertText("Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      insertText(guess > randomNumber ? "Too high..." : "Too low...");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      insertText("You lose...");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Criar a função do botão que limpa e comeca um novo jogo

document.querySelector(".again").addEventListener("click", function () {
  //Criar outro numero aleatório
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber, typeof randomNumber);

  //Colocar o score a 20 novamente e mostrar na tela
  score = 20;
  document.querySelector(".score").textContent = score;

  //Destrocar a cor
  document.querySelector("body").style.backgroundColor = "#222";

  //Voltar a mensagem
  insertText("Start guessing!");
});
