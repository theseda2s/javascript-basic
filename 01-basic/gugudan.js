for (let i = 2; i < 10; i++) {
  console.log(i + '단');
  for (let j = 1; j < 10; j++) {
    console.log(i, '*', j, '=', i * j);
  }
  console.log('');
}

// 짝수는 출력하지 않는 구구단
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i % 2 === 0 || j % 2 === 0) continue;
    console.log(i, '*', j, '=', i * j);
  }
}
