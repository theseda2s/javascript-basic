// 배열에서 ‘d’를 모두 제거하기. indexOf, splice 사용
const arr = ['a', 'd', 'c', 'd', 'e', 'd'];
let idx = arr.indexOf('d');
while (idx !== -1) {
  arr.splice(idx, 1);
  idx = arr.indexOf('d');
}
console.log(arr);
