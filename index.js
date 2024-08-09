const substractBtn = document.getElementById("substractBtn");
const addBtn = document.getElementById("addBtn");
const counterDisplay = document.getElementById("counterValue");
const counteArea = document.getElementById("counter_area");
const setBtn = document.getElementById("form_container").lastElementChild;
const input = document.getElementById("form_container").firstElementChild;
const resetBtn = document.getElementById("reset");
let inputValue = input.value;
//  TODO 1: vider le champs apres le clic
/*  TODO 2: add reset function
    reset vide le champs et remet le compteur a zero*/
//  TODO 3: faire sans la variable count
//  TODO 4: faire le style CSS

substractBtn.addEventListener("click", function decrement() {
  counterDisplay.innerText = Number(counterDisplay.innerText) - 1;
});

addBtn.addEventListener("click", function increment() {
  counterDisplay.innerText = Number(counterDisplay.innerText) + 1;
});

setBtn.addEventListener("click", function () {
  counterDisplay.innerText = input.value;
  input.value = 0;
});

resetBtn.addEventListener("click",function reset(){
  input.value = 0;
  counterDisplay.innerText = 0 ;
})