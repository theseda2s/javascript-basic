// 1 2 3 4 5
for (let i = 0; i < 5; i++) {
  console.log('*'.repeat(i + 1));
}
console.log('');

// 5 4 3 2 1
for (let i = 5; i > 0; i--) {
  console.log('*'.repeat(i));
}
console.log('');

// 5 4 3 2 1
for (let i = 0; i < 5; i++) {
  console.log('*'.repeat(5 - i));
}
console.log('');

// 1 3 5 7 9
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log('*'.repeat(i));
}
console.log('');

// 9 7 5 3 1
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log('*'.repeat(10 - i));
}
console.log('');

// 정삼각형
for (let i = 0; i < 5; i++) {
  console.log(' '.repeat(5 - i) + '*'.repeat(i + 1));
}
console.log('');

// 역 정삼각형
for (let i = 0; i < 5; i++) {
  console.log(' '.repeat(i) + '*'.repeat(5 - i));
}
console.log('');

// 트리
for (let i = 1; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(' '.repeat((10 - i) / 2) + '*'.repeat(i));
}
console.log('');

// 마름모
for (let i = 0; i < 5; i++) {
  if (i < 3) {
    console.log(' '.repeat(2 - i), '*'.repeat(2 * i + 1), ' '.repeat(2 - i));
  } else {
    console.log(' '.repeat(i - 2), '*'.repeat(9 - 2 * i), ' '.repeat(i - 2));
  }
}
