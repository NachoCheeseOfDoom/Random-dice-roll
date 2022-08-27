let dadosEl = document.getElementById("dados-el");
let sumEl = document.getElementById("sum-el");
let tirarDadoBtn = document.getElementById("tirarBtn");
let dados = []


tirarDadoBtn.addEventListener("click", function () {
  console.log(tiradaRandom());
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
}

function tiradaRandom() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}