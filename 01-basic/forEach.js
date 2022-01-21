// check strike ball
const answer = [3, 1, 4, 6];
const value = '3214';
let strike = 0;
let ball = 0;
answer.forEach((element, i) => {
  const index = value.indexOf(answer[element]);
  if (index > -1) {
    if (index === i) {
      strike += 1;
    } else {
      ball += 1;
    }
    console.log(strike, ball);
  }
});

// forEach -> for
const array = [1, 3, 5, 7];
array.forEach((number, index) => {
  console.log('forEach:', number, index);
});

// answer
const array2 = [1, 3, 5, 7];
for (let i = 0; i < array2.length; i++) {
  console.log('for:', array2[i], i);
}
