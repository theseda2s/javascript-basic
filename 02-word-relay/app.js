const number = parseInt(prompt('몇 명이 참가하나요?'), 10);

if (number) {
  const $button = document.querySelector('button');
  const $input = document.querySelector('input');
  const $word = document.querySelector('#word');
  const $order = document.querySelector('#order');
  let word;
  let newWord;

  const onClickButton = () => {
    // 제시어가 비어있거나 입력한 단어가 올바른가?
    if (!word || word[word.length - 1] == newWord[0]) {
      word = newWord; // 입력한 단어가 제시어가 된다.
      $word.textContent = word; // 화면 바꿔줌
      const order = parseInt($order.textContent); // 현재 순서
      if (order + 1 > number) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
    } else {
      alert('올바르지 않은 단어입니다.');
    }
    $input.value = '';
    $input.focus();
  };

  // 새 단어 제시어로 저장
  const onInput = (event) => {
    newWord = event.target.value;
  };

  $button.addEventListener('click', onClickButton);
  $input.addEventListener('input', onInput);
} else {
  alert('게임이 취소되었습니다');
}
