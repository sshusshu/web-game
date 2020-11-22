let numOne = "";
let operator = "";
let numTwo = "";

const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

const onClickNumber = function (e) {
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

const onClickOperator = function (e) {
  if (numOne) {
    operator = e.target.innerText;
    $operator.value = e.target.innerText;
  } else {
    alert("숫자를 먼저 입력하세요");
  }
};
const onClickCal = () => {
  if (!numTwo) {
    alert("숫자를 먼저 입력하세요.");
    return;
  }
  //eval함수로  문자열을 자바스크립트 코드처럼 실행가능. (해커가 악용하기 쉬움 되도록 쓰지말 것.)
  switch (operator) {
    case "+": //parseInt를 통해 문자열을 숫자로 바꾼 후 더하기
      $result.value = parseInt(numOne) + parseInt(numTwo);
      break;
    case "-": // 빼기,곱하기,나누기를 할 때는 자동으로 문자열이 숫자로 변함
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
  operator = "";
  numTwo = "";
};
const onClickClear = () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
};

document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);
document.querySelector("#plus").addEventListener("click", onClickOperator);
document.querySelector("#minus").addEventListener("click", onClickOperator);
document.querySelector("#divide").addEventListener("click", onClickOperator);
document.querySelector("#multiply").addEventListener("click", onClickOperator);
document.querySelector("#calculate").addEventListener("click", onClickCal);
document.querySelector("#clear").addEventListener("click", onClickClear);

// const func = (msg) => { // 고차함수 : 함수를 리턴하는 함수
//     return ()=>{
//         console.log(msg)
//     }
// }
