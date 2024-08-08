const substractBtn = document.getElementById("substractBtn");
const addBtn = document.getElementById("addBtn");
const counterDisplay = document.getElementById("counterValue");
const counteArea = document.getElementById("counter_area");
const setBtn = document.getElementById("form_container").lastElementChild;
const input = document.getElementById("form_container").firstElementChild;

let count = Number(counterDisplay.innerText);

substractBtn.addEventListener("click", function decrement() {
  count = count - 1;
  counterDisplay.innerText = count;
});

addBtn.addEventListener("click", function increment() {
  count++;
  counterDisplay.innerText = count;
});

setBtn.addEventListener("click", function () {
  //prendre la valeur de l'input
  let inputValue = input.value;
  //assigner la valeur au DisplayContainer
  count = inputValue;
  counterDisplay.innerText = count;
  //   TODO 1: vider le champs apres le clic
});

// TODO 2: add reset function
// reset vide le champs et remet le compteur a zero

// TODO 3: faire sans la variable count
