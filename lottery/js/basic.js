const result = document.querySelector("#result");
const bonus = document.querySelector("#bonus");

const numArr = Array(45)
  .fill()
  .map((a, i) => i + 1);
let shuffle = [];

while (numArr.length > 0) {
  const ranNum = Math.floor(Math.random() * numArr.length);
  shuffle.push(numArr[ranNum]);
  numArr.splice(ranNum, 1);
}

const winBalls = shuffle.slice(0, 8).sort((a, b) => a - b);
const bonusBall = shuffle[8];
const ballGenerator = function (parent, i) {
  const ball = document.createElement("div");
  let ballColor;
  ball.textContent = i;
  ball.className = "ball";
  if (i < 10) {
    ballColor = "#F26363";
  } else if (i < 20) {
    ballColor = "#F2B950";
  } else if (i < 30) {
    ballColor = "#2675A6";
  } else if (i < 40) {
    ballColor = "#010440";
  } else {
    ballColor = "green";
  }
  ball.style.backgroundColor = ballColor;
  ball.style.color = "white";
  parent.appendChild(ball);
};

for (let i = 0; i < 7; i++) {
  // for문에서 let은 하나의 블록마다 i를 고정시킴. ->블록스코프의 특
  setTimeout(function () {
    ballGenerator(result, winBalls[i]);
  }, 1000 * i);
}
setTimeout(function () {
  ballGenerator(bonus, bonusBall);
}, 7000);
