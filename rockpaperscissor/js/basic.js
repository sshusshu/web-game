const $computer = document.querySelector("#computer");
const $score = document.querySelector("#score");
const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");
const IMG_URL = "./img/rsp.png";
$computer.style.background = `url(${IMG_URL}) 0 0`; //가위
$computer.style.background = `url(${IMG_URL}) -220px 0`; //바위
$computer.style.background = `url(${IMG_URL}) -440px 0`; //보
$computer.style.backgroundSize = "auto 200px";

const rspX = {
  scissors: "-0",
  rock: "-220px",
  paper: "-440px",
};

let computerChoice = "scissors";
const changeComputerHand = () => {
  if (computerChoice === "rock") {
    computerChoice = "scissors";
  } else if (computerChoice === "scissors") {
    computerChoice = "paper";
  } else if (computerChoice === "paper") {
    computerChoice = "rock";
  }
  $computer.style.background = `url(${IMG_URL})${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = "auto 200px";
};

let intervalId = setInterval(changeComputerHand, 100);
const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
};
let clickable = true;
let score = 0;
const clickButton = () => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;
    const myChoice =
      event.target.textContent === "바위"
        ? "rock"
        : event.target.textContent === "가위"
        ? "scissors"
        : "paper";
    const myScore = scoreTable[myChoice];
    const computerScore = scoreTable[computerChoice];
    const diff = myScore - computerScore;

    let message = "";
    if ([2, -1].includes(diff)) {
      message = "승리";
      score += 1;
    } else if (diff === -2 || diff === 1) {
      message = "패배";
      score -= 1;
    } else {
      message = "무승부";
    }
    $score.textContent = `${message}  총:${score}점`;
    //점수 계산 및 화면 표시
    setTimeout(() => {
      clickable = true;
      intervalId = setInterval(changeComputerHand, 100);
    }, 1000);
  }
};
$rock.addEventListener("click", clickButton);
$scissors.addEventListener("click", clickButton);
$paper.addEventListener("click", clickButton);
