console.log("SIMON");

// inizio a scrive il ciclo per i numeri casuali

const randomNumb = [];
const guessNumb = 5;
const maxNumb = 100;

for (let i = 0; i, guessNumb; i++) {
  let n = Math.floor(Math.random() * maxNumb) + 1;
  randomNumb.push(n);
}
