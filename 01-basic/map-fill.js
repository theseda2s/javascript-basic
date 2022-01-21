const array = [1, 2, 3, 4];
const result = [];
for (let i = 0; i < 4; i++) {
  result.push(array[i] * 2);
}

// map
array.map((element, index) => {
  return element * 2;
}); // [2, 4, 6, 8]

const numbers = [];
for (let n = 0; n < 9; n++) {
  numbers.push(n + 1);
}

// fill, map
const numbers = Array(9)
  .fill(0)
  .map((element, index) => {
    return index + 1;
  });
console.log(numbers);
