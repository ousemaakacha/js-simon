console.log("SIMON");

// inizio a scrive il ciclo per i numeri casuali

const randomNumb = [];
const guessNumb = 5;
const maxNumb = 100;

for (let i = 0; i < guessNumb; i++) {
  let n = Math.floor(Math.random() * maxNumb) + 1;
  randomNumb.push(n);
}

// prendo la classe che mi interessa dalla dom e stampo un messago per memorizzare
const numbDiv = document.getElementById("numeri");

numbDiv.innerHTML = `MEMORIZZA QUESTI NUMERI ${randomNumb.join()}`;

// inizio a settare il timer di 30 second
setTimeout(() => {
  // nascondo i umeri
  numbDiv.style.display = "none";
}, 30000);

function showInput() {
  const inputsDiv = document.getElementById("inputs");
  inputsDiv.style.display = "block";
  inputsDiv.innerHTML = "inserisci i numeri che ti ricordi";
}
