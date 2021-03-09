// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector(".js-form"),
  rangeText = document.querySelector(".js-range-text"),
  rangeNumber = rangeText.querySelector(".js-range-number"),
  range = form.querySelector(".js-range"),
  numberRow = form.querySelector(".js-number-row"),
  numberGuess = numberRow.querySelector(".js-number-guess"),
  numberSubmit = numberRow.querySelector(".js-submit"),
  compareText = document.querySelector(".js-comparison"),
  result = document.querySelector(".js-result");

let RANGE_NUM = 10,
  RANDOM_NUM = 0;

function generateRandomNumber() {
  const rangeNumber = RANGE_NUM + 1;
  const randomNumber = Math.floor(Math.random() * rangeNumber);
  RANDOM_NUM = randomNumber;
}

function judge() {
  const userPick = parseInt(numberGuess.value, 10);
  const machinePick = RANDOM_NUM;
  if (userPick === machinePick) {
    result.innerHTML = "You Won!";
  } else {
    result.innerHTML = "You Lost!";
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentNumber = numberGuess.value;
  generateRandomNumber();
  compareText.innerHTML = `You chose: ${currentNumber}, machine chose: ${RANDOM_NUM}`;
  judge();
}

function setRangeNumber(number) {
  RANGE_NUM = parseInt(number, 10);
}

function getRangeValue(event) {
  const currentValue = event.target.value;
  rangeNumber.innerHTML = currentValue;
  setRangeNumber(currentValue);
}

function setDefaultValue() {
  range.value = 10;
  rangeNumber.innerHTML = "10";
}

function init() {
  setDefaultValue();
  range.addEventListener("input", getRangeValue);
  numberSubmit.addEventListener("click", handleSubmit);
}

init();
