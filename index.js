const substractBtn = document.querySelector(".counter__button--substract");
const addBtn = document.querySelector(".counter__button--add");
const counterDisplay = document.getElementById("counterValue");
const setBtn = document.querySelector(".form__button--set");
const resetBtn = document.querySelector(".form__button--reset");
const input = document.querySelector(".form__input");

substractBtn.addEventListener("click", () => {
  let currentValue = parseInt(counterDisplay.innerText);
  counterDisplay.innerText = currentValue - 1;
});

addBtn.addEventListener("click", () => {
  let currentValue = parseInt(counterDisplay.innerText);
  counterDisplay.innerText = currentValue + 1;
});

setBtn.addEventListener("click", () => {
  let inputValue = parseInt(input.value);
  if (!isNaN(inputValue)) {
    counterDisplay.innerText = inputValue;
    input.value = "";
  } else {
    alert("Entrez un nombre correct !");
  }
});

resetBtn.addEventListener("click", () => {
  counterDisplay.innerText = 0;
  input.value = "";
});
