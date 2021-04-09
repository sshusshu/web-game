const playerNum = prompt('How many players are playing?');

if(playerNum){
    const $input = document.querySelector('input');
    const $button = document.querySelector('button');
    const $word = document.querySelector('#word');
    const $order = document.querySelector('#order');

    let word;
    let newWord;
    let num = 1;

    const onClickBtn = ()=> {
        if (!word || (newWord.length === 3 && word[word.length-1]===newWord[0])) { // 첫 제시어
            word = newWord;
            $word.textContent = newWord;
            if(Number($order.textContent)-1>playerNum){num=1}else{num++}
            $order.textContent = num;
            $input.focus();
            $input.value = '';
        }else{
            alert('try again!')
            $input.focus();
            $input.value = '';
        }
    }
    const onInput = (e)=>{
        newWord = e.target.value;
    }

    $button.addEventListener('click',onClickBtn)
    $input.addEventListener('input',onInput)
}


