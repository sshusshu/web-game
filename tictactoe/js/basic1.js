const {body} = document
const $table = document.createElement('table');
const $result = document.createElement('div');
const rows = []
let turn = 'O';
let flag= false;

const checkWinner = (target)=>{
    if(flag) return
    const rowIndex = target.parentNode.rowIndex;
    const cellIndex = target.cellIndex;
    let hasWinner = false;
    //가로줄 검사
    if(
        rows[rowIndex][0].textContent === turn &&
        rows[rowIndex][1].textContent === turn &&
        rows[rowIndex][2].textContent === turn
    ){
        hasWinner = true;
    }
    //세로줄 검사
    if(
        rows[0][cellIndex].textContent === turn &&
        rows[1][cellIndex].textContent === turn &&
        rows[2][cellIndex].textContent === turn
    ){
        hasWinner = true;
    }
    //대각선 검사
    if(
        rows[0][0].textContent === turn &&
        rows[1][1].textContent === turn &&
        rows[1][2].textContent === turn
    ){
        hasWinner = true;
    }
    if(
        rows[0][2].textContent === turn &&
        rows[1][1].textContent === turn &&
        rows[0][2].textContent === turn
    ){
        hasWinner = true;
    }
    return hasWinner;
}
const callback =(event)=>{
    if(event.target.textContent!==''){
        console.log('빈칸이 아닙니다.')
        return;
    }
    event.target.textContent = turn;
    // 승자가 있으면,
    const hasWinner = checkWinner(event.target);
    if(hasWinner){
        $result.textContent =`${turn}님의 승리!`;
        return;
    }
    // 승자가 없으면,
    const draw = rows.flat().every(a=>a.textContent);
    if(draw){
        $result.textContent =`무승부!`;
        return;
    }
    flag = true;
    turn = turn === 'X'?'O':'X';
    //컴퓨터의 턴
    const emptyArr = rows.flat().filter(cell=>cell.textContent==='');
    setTimeout(()=>{
        const computerChoice = Math.floor(Math.random()*emptyArr.length)
        emptyArr[computerChoice].textContent = turn;
        turn = turn === 'X'?'O':'X';
        flag = false;
    },1000)
}

for(let i = 0; i<3;i++){
    const $tr = document.createElement('tr');
    const cells = [];
    for(let j =0;j<3;j++){
        const $td = document.createElement('td');
        cells.push($td);
        $tr.appendChild($td);
    }
    rows.push(cells);
    $table.appendChild($tr);
    $table.addEventListener('click',callback);
}

body.appendChild($table);
body.appendChild($result);
