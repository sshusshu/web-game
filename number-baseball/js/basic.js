const $form = document.querySelector("#form");
const $logs = document.querySelector("#logs");
const $input = document.querySelector("#input");

let forjs = undefined;
const numbers = [];
const answer = [];
let out = 0;

for (let i = 0; i < 9; i++) {
  numbers.push(i + 1);
}
for (let i = 0; i < 4; i++) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}

console.log(answer);

const tries = [];
function checkInput(input) {
  if (input.length !== 4) {
    return alert("네자리 숫자를 입력해주세요."); //alert함수는 undefined를 리턴.
  }
  if (new Set(input).size !== 4) {
    return alert("중복되지 않게 입력해주세요.");
  }
  if (tries.includes(input)) {
    return alert("이미 시도한 값입니다.");
  }
  return true;
}
$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = $input.value;
  $input.value = "";
  const valid = checkInput(value);
  if (!valid) return;
  if (answer.join("") === value) {
    $logs.textContent = "홈런!";
    return;
  }
  if (tries.length >= 9) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join("")}`);
    $logs.appendChild(message);
    return;
  }
  // 몇볼,스트라이크 검사
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) {
      if (index === i) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
    //appendChild는 하나의 텍스트나 태그 추가 가능. append는 여러개 텍스트나 태그 추가 가능
  }
  if (strike === 0 && ball === 0) {
    out++;
    if (out >= 3) {
      $logs.textContent = "아웃!";
      return;
    }
  }
  // const checkValue = value.split('').map(a=>+a)
  // answer.filter((a,i)=>{
  //     if(checkValue.includes(a)){
  //         checkValue[i]===a?strike++:ball++
  //     }
  // })
  $logs.append(
    `${value}:${strike}스트라이크 ${ball}볼`,
    document.createElement("br")
  );
  tries.push(value);
});
