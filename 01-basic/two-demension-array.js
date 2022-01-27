// 5*4 이차원 배열 만들기. 배열의 요소는 모두 1
const array = [];
for (let i = 0; i < 5; i++) {
  const innerArray = [];
  for (let j = 0; j < 4; j++) {
    innerArray.push(1);
  }
  array.push(innerArray);
}
console.log(array);
