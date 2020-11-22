const numOps = document.querySelectorAll("#numOpBox .row button");
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
let numOne = "";
let operator = "";
let numTwo = "";

const onClickNumber = (e) => {
  if (!operator) {
    numOne += e.target.innerText;
    $result.value += e.target.innerText;
    return;
  }
  if (!numTwo) {
    $result.value = "";
  }
  numTwo += e.target.innerText;
  $result.value += e.target.innerText;
};
const onClickOperator = (e) => {
  if (!numOne) {
    alert("숫자를 입력하세요.");
    return;
  }
  operator = e.target.innerText;
  $operator.value = operator;
};
const onClickCal = () => {
  if (!numTwo) {
    alert("숫자를 먼저 입력하세요.");
    return;
  }
  switch (operator) {
    case "+":
      $result.value = parseInt(numOne) + parseInt(numTwo);
      break;
    case "-":
      $result.value = numOne - numTwo;
      break;
    case "*":
      $result.value = numOne * numTwo;
      break;
    case "/":
      $result.value = numOne / numTwo;
      break;
  }
  numOne = $result.value;
  numTwo = "";
  operator = "";
};
const onClickClear = () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
};

numOps.forEach((btn) => {
  if (btn.innerText === "C") {
    btn.addEventListener("click", onClickClear);
    return;
  }
  if (btn.innerText === "=") {
    btn.addEventListener("click", onClickCal);
    return;
  }
  if (Number(btn.innerText) || btn.innerText === "0") {
    btn.addEventListener("click", onClickNumber);
  } else {
    btn.addEventListener("click", onClickOperator);
  }
});
