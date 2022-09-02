let dadosEl = document.getElementById("dados-el");
let sumEl = document.getElementById("sum-el");
let tirarDadoBtn = document.getElementById("tirarBtn");
let dados = []

const dice1El = document.getElementById("dice1");
const dice2El = document.getElementById("dice2");


tirarDadoBtn.addEventListener("click", function () {
  tirarDados();
});

function tirarDados() {
  // Generate two random numbes
  let dado1 = tiradaRandom();
  let dado2 = tiradaRandom();

  // Re-assign the cards and sum variables so that the game can start
  dados = [dado1, dado2];
  sum = dado1 + dado2;

  mostrarJuego()
}

function mostrarJuego() {
  dadosEl.innerHTML = "Dados: "
  for (let i = 0; i < dados.length; i++) {
    dadosEl.innerHTML += dados[i] + " "
  }
  sumEl.textContent = "Sum: " + sum
  // Dice 1 
  if (dados[0] === 1) {
    dice1El.innerHTML = `<img src="dices/dice1.png" alt="dice 1" />`
  } else if (dados[0] === 2) {
    dice1El.innerHTML = `<img src="dices/dice2.png" alt="dice 2" />`
  } else if (dados[0] === 3) {
    dice1El.innerHTML = `<img src="dices/dice3.png" alt="dice 3" />`
  } else if (dados[0] === 4) {
    dice1El.innerHTML = `<img src="dices/dice-4.svg" alt="dice 4" />`
  } else if (dados[0] === 5) {
    dice1El.innerHTML = `<img src="dices/dice5.png" alt="dice 5" />`
  } else {
    dice1El.innerHTML = `<img src="dices/dice-6.png" alt="dice 6" />`
  }
  //---------------------------------------------------------------------
  // Dice 2
  if (dados[1] === 1) {
    dice2El.innerHTML = `<img src="dices/dice1.png" alt="dice 1" />`
  } else if (dados[1] === 2) {
    dice2El.innerHTML = `<img src="dices/dice2.png" alt="dice 2" />`
  } else if (dados[1] === 3) {
    dice2El.innerHTML = `<img src="dices/dice3.png" alt="dice 3" />`
  } else if (dados[1] === 4) {
    dice2El.innerHTML = `<img src="dices/dice-4.svg" alt="dice 4" />`
  } else if (dados[1] === 5) {
    dice2El.innerHTML = `<img src="dices/dice5.png" alt="dice 5" />`
  } else {
    dice2El.innerHTML = `<img src="dices/dice-6.png" alt="dice 6" />`
  }

}



function tiradaRandom() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}