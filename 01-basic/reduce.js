[1, 2, 3, 4].reduce((a, c) => a + c, 0);
// a: 0, c: 1 (0: 초기값(누적값))
// a: 1, c: 2
// a: 3, c: 3
// a: 6, c: 4
// return 값: 10

[1, 2, 3, 4].reduce((a, c) => a + c);
// a: 1, c: 2
// a: 3, c: 3
// a: 6, c: 4
// return 값: 10

[1, 2, 3, 4].reduce((a, c) => a * c, 1);
// a: 1, c: 1
// a: 1, c: 2
// a: 2, c: 3
// a: 6, c: 4
// return 값: 24

// 배열 -> 객체리터럴
['고양이', '강아지', '호랑이', '사자'].reduce((a, c, i) => {
  a[i] = c;
  return a;
}, {});
// a: {}, c: '고양이', i: 0
// a: {0: '고양이'}, c: '강아지', i: 1
// a: {0: '고양이' 1: '강아지'}, c: '호랑이', i: 2
// a: {0: '고양이' 1: '강아지', 2: '호랑이'}, c: '사자', i: 3
// return 값: {0: "고양이", 1: "강아지", 2: "호랑이", 3: "사자"}

// 결과 예상해보기
[1, 2, 3, 4, 5].reduce((a, c) => {
  a[c] = c * 10;
  return a;
}, {});
// a: {} , c: 1
// a: {10} , c: 2
// a: {10, 20}, c: 3
// a: {10, 20, 30}, c: 4
// a: {10, 20, 30, 40}, c: 5
// return 값: {10, 20, 30, 40, 50}