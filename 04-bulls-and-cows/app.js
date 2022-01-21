const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];
for (let n = 0; n < 9; n++) {
  numbers.push(n + 1);
}

const answer = [];
for (let n = 0; n < 4; n++) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);

const tries = [];
function checkInput(input) {
  if (input.length !== 4) {
    return alert('4자리 숫자를 입력하세요!');
  }
  if (new Set(input).size !== 4) {
    return alert('중복되지 않게 입력하세요!');
  }
  if (tries.includes(input)) {
    return alert('이미 시도한 값입니다.');
  }
  return true;
} // check Input

$form.addEventListener('submit', (event) => {
  event.preventDefault(); // 기본 동작 막기
  const value = $input.value;
  $input.value = '';
  const valid = checkInput(value);
  if (!valid) {
    return;
  }
  if (answer.join('') === value) {
    $logs.textContent = '⚾HOMERUN!⚾';
    return;
  }
  if (tries.length >= 9) {
    const message = document.createTextNode(`Failed! The answer is ${answer.join('')}`);
    $logs.append(message);
    return;
  }
  // check strike ball
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
  }
  $logs.append(`${tries.length + 1} - ${value}: ${strike}S ${ball}B`, document.createElement('br'));
  tries.push(value);
});
