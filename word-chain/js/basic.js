const playerNum = Number(prompt('몇 명이 참가하나요?')); // prompt로 받은 값은 모두 문자열
// 브라우저에서 띄울 수 있는 대화 상자 prompt,alert,confirm
const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');

let word;
let newWord;
$input.focus();

const onClickBtn = ()=>{
    if(!word || word[word.length-1]===newWord[0]){
        word = newWord;
        $word.textContent = word;
        const order = Number($order.textContent);
        if(order+1 >playerNum){
            $order.textContent = 1;
        }else{
            $order.textContent = order + 1;
        }
        $input.value = '';
        $input.focus();
    }else{
        alert('올바르지 않은 단어입니다!');
    }
    $input.value = '';//입력태그는 textContent 대신 value를 사용한다. *input,select,textarea
    $input.focus();
}
const onInput = (e)=>{
    newWord = e.target.value;
}

$button.addEventListener('click',onClickBtn) // onClickBtn() 괄호를 붙이게 되면 이벤트와 상관없이 함수가 실행됨.
$input.addEventListener('input',onInput)


//1.프로그램 절차의 개수는 정해져 있어야 한다.
//2.각 절차는 항상 같은 내용이어야 한다.
//3.모든 가능성을 고려해야 한다.
//4.예시는 절차를 검증하기 위해 사용한다.
//* 사용자의 이벤트 (버튼클릭, 입력창 글자 입력 등)가 필요한 곳에서 순서도를 끊어야 함.

