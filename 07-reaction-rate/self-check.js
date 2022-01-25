const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');
let timeoutId;
let startTime;
let endTime;
const records = [];

$screen.addEventListener('click', function () {
  if ($screen.classList.contains('waiting')) {
    $screen.classList.remove('waiting');
    $screen.classList.add('ready');
    $screen.textContent = '초록색이 되면 클릭하세요';
    timeoutId = setTimeout(() => {
      startTime = new Date();
      $screen.classList.remove('ready');
      $screen.classList.add('now');
      $screen.textContent = '클릭하세요!';
    }, Math.floor(Math.random() * 1000) + 2000);
  } else if ($screen.classList.contains('ready')) {
    $screen.textContent = '성급했어요! 다시 시작하세요';
    $screen.classList.remove('ready');
    $screen.classList.add('waiting');
    clearTimeout(timeoutId);
  } else if ($screen.classList.contains('now')) {
    endTime = new Date();
    const current = endTime - startTime;
    records.push(current);
    const average = records.reduce((a, c) => a + c) / records.length;
    $result.textContent = `현재: ${current}ms, 평균: ${average}ms`;

    let topFive = records
      .slice()
      .sort((a, b) => a - b)
      .slice(0, 5);
    $result.append(document.createElement('br'), `TOP 5`);
    topFive.forEach((top, index) => {
      $result.append(document.createElement('br'), `${index + 1}위: ${top}ms`);
    });
    startTime = null;
    endTime = null;
    $screen.classList.remove('now');
    $screen.classList.add('waiting');
    $screen.textContent = '클릭해서 시작하세요';
  }
});
