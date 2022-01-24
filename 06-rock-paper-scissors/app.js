const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL = './rsp.png';
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = 'auto 200px';

const rspX = {
  scissors: '0',
  rock: '-220px',
  paper: '-440px',
};

let computerChoice = 'scissors';
const changeComputerhand = () => {
  if (computerChoice === 'scissors') {
    computerChoice = 'rock';
  } else if (computerChoice === 'rock') {
    computerChoice = 'paper';
  } else if (computerChoice === 'paper') {
    computerChoice = 'scissors';
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = 'auto 200px';
};
let intervalId = setInterval(changeComputerhand, 50);

// 가위: 1,  바위: 0,   보: -1
// 나\컴퓨터  가위    바위    보
// 가위       0       1       2
// 바위      -1       0       1
// 보        -2      -1       0
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
    // 점수 계산 및 화면 표시
    const myChoice =
      event.target.textContent === '✊' ? 'rock' : event.target.textContent === '✌️' ? 'scissors' : 'paper';
    const myScore = scoreTable[myChoice];
    const computerScore = scoreTable[computerChoice];
    const diff = myScore - computerScore;
    console.log(myChoice, computerChoice, myScore, computerScore, diff);
    let message;
    // 2, -1은 승리 조건이고, -2, 1은 패배 조건, 점수표 참고
    if ([2, -1].includes(diff)) {
      score += 1;
      message = '승리';
    } else if ([-2, 1].includes(diff)) {
      score -= 1;
      message = '패배';
    } else if (diff === 0) {
      message = '무승부';
    }
    $score.textContent = `${message}! 총: ${score}점`;
    setTimeout(() => {
      clickable = true;
      intervalId = setInterval(changeComputerhand, 50);
    }, 1000);
  }
};
$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
