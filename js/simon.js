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
  showInput();
}, 5000);

function showInput() {
  const inputsDiv = document.getElementById("inputs");
  inputsDiv.style.display = "block";
  inputsDiv.innerHTML = "inserisci i numeri che ti ricordi";

  // creo 5 i input
  for (let i = 0; i < guessNumb; i++) {
    const input = document.getElementById("input");
    input.type = "number";
    input.id = "num" + i;
    inputsDiv.appendChild(input);
  }

  const btn = document.createElement("button");
  inputsDiv.appendChild(btn);
}

// creo la funzione per verificare i numeri
function verNumb() {
  const userNumb = [];

  // ciclo for per leggere gli input
  for (let i = 0; i < guessNumb.length; i++) {
    const val = parseInt(document.getElementById("num" + i).value);
  }

  const userGuessNumb = [];

  // cofronto con un doppio ciclo for i numeri randon e quelli user

  for (let i = 0; i < userNumb.length; i++) {
    for (let j = 0; j < randomNumb.length; j++) {
      if (userNumb[i] === randomNumb[j]) {
        userGuessNumb.push(userNumb[i]);
        break;
      }
    }
  }

  const resultEl = document.getElementById("result");
  resultEl.innerHTML = (userGuessNumb.length, userGuessNumb.join);
}
