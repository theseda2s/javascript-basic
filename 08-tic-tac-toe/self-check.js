const { body } = document;
const $table = document.createElement('table');
const $result = document.createElement('div');
const rows = [];
let turn = 'O';

// [
//   [td, td, td],
//   [td, td, td],
//   [td, td, td],
// ]

const checkWinner = (target) => {
  let rowIndex = target.parentNode.rowIndex;
  let cellIndex = target.cellIndex;

  // 세 칸 다 채워졌는지 확인
  let hasWinner = false;
  // 가로줄 검사
  if (
    rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn
  ) {
    hasWinner = true;
  }
  // 세로줄 검사
  if (
    rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn
  ) {
    hasWinner = true;
  }
  // 대각선 검사
  if (rows[0][0].textContent === turn && rows[1][1].textContent === turn && rows[2][2].textContent === turn) {
    hasWinner = true;
  }
  if (rows[0][2].textContent === turn && rows[1][1].textContent === turn && rows[2][0].textContent === turn) {
    hasWinner = true;
  }
  return hasWinner;
};

const checkWinnerAndDraw = (target) => {
  // 승부 판단
  const hasWinner = checkWinner(target);
  if (hasWinner) {
    $result.textContent = `${turn} 승리!`;
    $table.removeEventListener('click', callback);
    return;
  }
  // 무승부 검사
  const draw = rows.flat().every((cell) => cell.textContent);
  if (draw) {
    $result.textContent = `무승부!`;
    return;
  }
  turn = turn === 'X' ? 'O' : 'X';
};

let clickable = true;
const callback = (event) => {
  if (!clickable) {
    return;
  }
  // 칸에 글자 있는지 확인
  if (event.target.textContent !== '') {
    console.log('빈칸이 아닙니다');
    return;
  }
  console.log('빈칸입니다');
  event.target.textContent = turn;
  checkWinnerAndDraw(event.target);
  // 승자가 없으면
  if (turn === 'X') {
    clickable = false;
    setTimeout(() => {
      const emptyCells = rows.flat().filter((v) => !v.textContent);
      const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      randomCell.textContent = 'X';
      checkWinnerAndDraw(randomCell);
      clickable = true;
    }, Math.floor(Math.random() * 1000));
  }
};

for (let i = 0; i < 3; i++) {
  const $tr = document.createElement('tr');
  const cells = [];
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement('td');
    cells.push($td);
    $tr.append($td);
  }
  rows.push(cells);
  $table.append($tr);
}
$table.addEventListener('click', callback);
body.append($table);
body.append($result);
