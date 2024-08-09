const substractBtn = document.getElementById("substractBtn");
const addBtn = document.getElementById("addBtn");
const counterDisplay = document.getElementById("counterValue");
const counteArea = document.getElementById("counter_area");
const setBtn = document.getElementById("form_container").lastElementChild;
const reSet = document.getElementsByTagName('button')[2]
const input = document.getElementById("form_container").firstElementChild;



substractBtn.addEventListener("click", function decrement() {
  counterDisplay.innerText = Number(counterDisplay.innerText)-1;
});

addBtn.addEventListener("click", function increment() {
  counterDisplay.innerText = Number(counterDisplay.innerText)+1;
});

setBtn.addEventListener("click", function () {
  //prendre la valeur de l'input
  //assigner la valeur au DisplayContainer
  if(input.value=='') counterDisplay.innerText
  else counterDisplay.innerText = input.value;
  input.value=''
  //   TODO 1: vider le champs apres le clic
});



// TODO 2: add reset function
// reset vide le champs et remet le compteur a zero
reSet.addEventListener('click', ()=>{
  input.value=''
  counterDisplay.innerText='0'
})

// TODO 3: faire sans la variable count
// TODO 4: faire le style CSS
