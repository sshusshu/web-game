const $computer = document.querySelector("#computer");
const $score = document.querySelector("#score");
const $rock = document.querySelector("#rock");
const $paper = document.querySelector("#paper");
const $scissors = document.querySelector("#scissors");
const IMG_URL = "./img/rsp.png";

$computer.style.background = `url(${IMG_URL})0 0`; //가위
$computer.style.backgroundSize = "auto 200px";

const rpsX = {
  r: "-220px",
  p: "-440px",
  s: "-0",
};

let computerChoice = "s";
const changeComputerHand = () => {
  if (computerChoice === "r") {
    computerChoice = "s";
  } else if (computerChoice === "s") {
    computerChoice = "p";
  } else if (computerChoice === "p") {
    computerChoice = "r";
  }
  $computer.style.background = `url(${IMG_URL}) ${rpsX[computerChoice]} 0`;
  $computer.style.backgroundSize = "auto 200px";
};
let intervalId = setInterval(changeComputerHand, 100);
let clickable = true;
let score = 0;
let playCount = 0;
const scoreTable = {
  r: 0,
  p: 1,
  s: -1,
}; // tie 0 // win 1-2 // lose -1 2
const clickButton = (event) => {
  if (clickable && playCount < 5) {
    clearInterval(intervalId);
    clickable = false;
    const myChoice =
      event.target.textContent === "바위"
        ? "r"
        : event.target.textContent === "가위"
        ? "s"
        : "p";
    const myScore = scoreTable[myChoice];
    const diff = myScore - scoreTable[computerChoice];
    let message = "";

    if ([1, -2].includes(diff)) {
      message = "win!";
      score += 1;
    } else if ([-1, 2].includes(diff)) {
      message = "lose!";
      score -= 1;
    } else {
      message = "tie!";
    }
    $score.textContent = `${message} 총 ${score}점`;
    playCount++;
    setTimeout(() => {
      clickable = true;
      intervalId = setInterval(changeComputerHand, 100);
    }, 1000);
  }

  if (playCount === 5) {
    clearInterval(intervalId);
    let winner = "computer win";
    if (score >= 3) winner = "you win";
    $score.textContent = `${winner}`;
  }
};

$rock.addEventListener("click", clickButton);
$paper.addEventListener("click", clickButton);
$scissors.addEventListener("click", clickButton);
