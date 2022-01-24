const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);

const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}
console.log(shuffle);
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];
console.log(winBalls, bonus);

const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

// 당첨 공에 배경색 넣기
function colorize(number, $tag) {
  if (number < 10) {
    $tag.style.backgroundColor = '#f44336';
    $tag.style.color = '#fff';
  } else if (number < 20) {
    $tag.style.backgroundColor = '#ff7043';
  } else if (number < 30) {
    $tag.style.backgroundColor = '#ffee58';
  } else if (number < 40) {
    $tag.style.backgroundColor = '#0d47a1';
    $tag.style.color = '#fff';
  } else {
    $tag.style.backgroundColor = '#1b5e20';
    $tag.style.color = '#fff';
  }
}

const drawBall = (number, $parent) => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  colorize(number, $ball);
  $ball.textContent = number;
  $parent.appendChild($ball);
};

for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    drawBall(winBalls[i], $result);
  }, (i + 1) * 1000);
}
setTimeout(() => {
  drawBall(bonus, $bonus);
}, 7000);
