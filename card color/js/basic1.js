const playerNum = Number(prompt("How many players are gonna play?"));
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");

let forjs = undefined;
let word;
let newWord;
let num;
const onClickBtn = () => {
  if (!word || word[word.length - 1] === newWord[0]) {
    //제시어가 있거나 맞으면
    word = newWord;
    $word.textContent = newWord;
    Number($order.textContent) > playerNum - 1 ? (num = 1) : num++;
    $order.textContent = num;
    $input.value = "";
    $input.focus();
  } else {
    //제시어가 없으면
    alert("try again!");
  }
};

const onInput = (e) => {
  newWord = e.target.value;
};

$input.addEventListener("input", onInput);
$button.addEventListener("click", onClickBtn);
