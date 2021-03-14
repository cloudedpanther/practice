// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const calc = document.querySelector(".js-calculator"),
  calcRow = calc.querySelectorAll(".js-calculator-row"),
  result = calcRow[0].querySelector(".result"),
  reset = calcRow[0].querySelector(".js-reset"),
  numberBtns_123 = calcRow[1].querySelectorAll(".js-number"),
  numberBtns_456 = calcRow[2].querySelectorAll(".js-number"),
  numberBtns_789 = calcRow[3].querySelectorAll(".js-number"),
  numberBtn_0 = calcRow[4].querySelector(".js-number"),
  operatorPlus = calcRow[1].querySelector(".js-plus"),
  operatorMinus = calcRow[2].querySelector(".js-minus"),
  operatorMultiply = calcRow[3].querySelector(".js-multiply"),
  operatorDivide = calcRow[4].querySelector(".js-divide"),
  equal = calcRow[4].querySelector(".js-equal");

let numberStorage = "",
  numberTemp = "",
  operatorPicked = 0;

function numberEventHandler(event) {
  const numberValue = event.target.value;
  if (numberStorage === "0") {
    numberStorage = `${numberValue}`;
    result.innerHTML = numberStorage;
  } else {
    numberStorage = `${numberStorage}${numberValue}`;
    result.innerHTML = numberStorage;
  }
}

function numbers() {
  numberBtn_0.addEventListener("click", numberEventHandler);
  numberBtns_123[0].addEventListener("click", numberEventHandler);
  numberBtns_123[1].addEventListener("click", numberEventHandler);
  numberBtns_123[2].addEventListener("click", numberEventHandler);
  numberBtns_456[0].addEventListener("click", numberEventHandler);
  numberBtns_456[1].addEventListener("click", numberEventHandler);
  numberBtns_456[2].addEventListener("click", numberEventHandler);
  numberBtns_789[0].addEventListener("click", numberEventHandler);
  numberBtns_789[1].addEventListener("click", numberEventHandler);
  numberBtns_789[2].addEventListener("click", numberEventHandler);
}

function resetEventHandler(event) {
  numberStorage = "";
  numberTemp = "";
  operatorPicked = 0;
  result.innerHTML = "0";
}

function operatorEventHandler(event) {
  if (numberStorage !== "") {
    if (operatorPicked !== 0) {
      calculate();
    }
    numberTemp = numberStorage;
    numberStorage = "";
    const operatorCheck = event.target.value;
    if (operatorCheck === "+") {
      operatorPicked = 1;
    } else if (operatorCheck === "-") {
      operatorPicked = 2;
    } else if (operatorCheck === "x") {
      operatorPicked = 3;
    } else if (operatorCheck === "/") {
      operatorPicked = 4;
    }
  }
}

function calculate() {
  if (operatorPicked !== 0 && numberStorage !== "") {
    const firstNumber = parseInt(numberTemp, 10);
    const secondNumber = parseInt(numberStorage, 10);
    if (operatorPicked === 1) {
      const resultNumber = firstNumber + secondNumber;
      numberStorage = `${resultNumber}`;
    } else if (operatorPicked === 2) {
      const resultNumber = firstNumber - secondNumber;
      numberStorage = `${resultNumber}`;
    } else if (operatorPicked === 3) {
      const resultNumber = firstNumber * secondNumber;
      numberStorage = `${resultNumber}`;
    } else if (operatorPicked === 4) {
      const resultNumber = firstNumber / secondNumber;
      numberStorage = `${resultNumber}`;
    }

    result.innerHTML = `${numberStorage}`;
    numberTemp = "";
    operatorPicked = 0;
  }
}

function equalEventHandler(event) {
  calculate();
}

function operators() {
  operatorPlus.addEventListener("click", operatorEventHandler);
  operatorMinus.addEventListener("click", operatorEventHandler);
  operatorMultiply.addEventListener("click", operatorEventHandler);
  operatorDivide.addEventListener("click", operatorEventHandler);
}

function btns() {
  numbers();
  reset.addEventListener("click", resetEventHandler);
  operators();
  equal.addEventListener("click", equalEventHandler);
}

function init() {
  btns();
}

init();
