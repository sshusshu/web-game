const { body } = document; // const body = document.body (구조 분해 할당)
const $table = document.createElement("table");
const $result = document.createElement("div");
const rows = [];
let turn = "O";
let flag = false;

const callback = (event) => {
  if (flag) return;
  if (event.target.textContent !== "") {
    //칸이 이미 채워져 있는가?
    console.log("빈칸이 아닙니다.");
    return;
  }
  event.target.textContent = turn;
  const hasWinner = checkWinner(event.target);
  //승자가 있으면
  if (hasWinner) {
    $result.textContent = `${turn}님의 승리`;
    return;
  }
  //승자가 없으면
  const draw = rows.flat().every((cell) => cell.textContent);
  // let draw = true;
  // rows.forEach(row=>{
  //     row.forEach(cell=>{
  //         if(!cell.textContent){
  //             draw = false;
  //         }
  //     })
  // })
  if (draw) {
    $result.textContent = "무승부";
    return;
  }
  turn = turn === "X" ? "O" : "X";
  flag = true;
  //컴퓨터의 턴
  const emptyArr = rows.flat().filter((cell) => cell.textContent === "");
  setTimeout(() => {
    const computerChoice = Math.floor(Math.random() * emptyArr.length);
    emptyArr[computerChoice].textContent = turn;
    turn = turn === "X" ? "O" : "X";
    flag = false;
  }, 1000);

  //event.target.textContent = turn;
};

const checkWinner = (target) => {
  const rowIndex = target.parentNode.rowIndex;
  const cellIndex = target.cellIndex;
  // let rowIndex;
  // let cellIndex;
  // rows.forEach((row,ri)=>{
  //     row.forEach((cell,ci)=>{
  //         if(cell===target){
  //             rowIndex = ri;
  //             cellIndex = ci;
  //         }
  //     })
  // })

  //세칸 다 채워졌나?
  let hasWinner = false;
  //가로줄 검사
  if (
    rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn
  ) {
    hasWinner = true;
  }
  //세로줄 검사
  if (
    rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn
  ) {
    hasWinner = true;
  }
  //대각선 검사
  if (
    rows[0][0].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][2].textContent === turn
  ) {
    hasWinner = true;
  }
  if (
    rows[0][2].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][0].textContent === turn
  ) {
    hasWinner = true;
  }
  return hasWinner;
};

for (let i = 1; i <= 3; i += 1) {
  const $tr = document.createElement("tr");
  const cells = [];
  for (let j = 1; j <= 3; j += 1) {
    const $td = document.createElement("td");
    cells.push($td);
    $tr.appendChild($td);
  }
  rows.push(cells);
  $table.addEventListener("click", callback);
  $table.appendChild($tr);
}
body.appendChild($table);
body.appendChild($result);
