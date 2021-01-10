const $form = document.querySelector("form");
const $input = document.querySelector("input");
const $logs = document.querySelector("#logs");

const numbers = Array(9)
  .fill()
  .map((v, i) => i + 1);
let answer = [];
let out = 0;

for (let i = 0; i < 4; i++) {
  const ranNum = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[ranNum]);
  numbers.splice(ranNum, 1);
}

let tries = [];

$form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = $input.value;
  $input.value = "";
  const valid = checkInput(value);
  if (!valid) return;
  if (answer.join("") === value) {
    //홈런
    $logs.textContent = "홈런!";
    return;
  }
  if (tries.length >= 9) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join("")}`);
    $logs.appendChild(message);
    return;
  }
  // strike ,ball check
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < answer.length; i++) {
    const check = value.indexOf(answer[i]);
    if (check > -1) {
      check === i ? strike++ : ball++;
    }
  }
  if (strike === 0 && ball === 0) {
    out++;
    if (out >= 3) {
      $logs.textContent = "아웃!";
      return;
    }
  }
  $logs.append(
    `${value}:${strike}스트라이크 ${ball}볼`,
    document.createElement("br")
  );
  tries.push(value);
});

function checkInput(value) {
  if (value.length !== 4) {
    return alert("4자리 숫자를 입력해주세요.");
  }
  if (tries.includes(value)) {
    return alert("이미 시도한 값입니다.");
  }
  if (new Set(value).size !== 4) {
    return alert("중복되지 않게 입력해주세요.");
  }
  return true;
}
