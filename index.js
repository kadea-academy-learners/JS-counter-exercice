const substractBtn = document.getElementById("substractBtn");
const addBtn = document.getElementById("addBtn");
const counterDisplay = document.getElementById("counterValue");
const counteArea = document.getElementById("counter_area");
const setBtn = document.getElementById("form_container").lastElementChild;
const input = document.getElementById("form_container").firstElementChild;
const reset = document.getElementById("resetBtn");


substractBtn.addEventListener("click", function decrement() {

  counterDisplay.innerText = Number(counterDisplay.innerText) - 1;
});

addBtn.addEventListener("click", function increment() {
  counterDisplay.innerText = Number(counterDisplay.innerText) + 1;
});

setBtn.addEventListener("click", function () {
  //prendre la valeur de l'input
  let inputValue = input.value;
  //assigner la valeur au DisplayContainer
  counterDisplay.innerText = input.value;
  //   TODO 1: vider le champs apres le clic
  input.value = "";
});

// TODO 2: add reset function
// reset vide le champs et remet le compteur a zero
reset.addEventListener("click",function reset(){
  input.value = "";
  counterDisplay.innerText = 0 ;

})
