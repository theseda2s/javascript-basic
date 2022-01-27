// 다음 배열에서 null이 하나라도 들어있으면 true 반환하고, 아니면 false 반환하기
const arr = [1, 'hello', null, undefined, false];
const some = arr.some((value) => value === null);
console.log(some);
