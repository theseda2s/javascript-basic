// 중첩된 if 문 줄이기
function test() {
  let result = '';
  if (a) {
    if (!b) {
      result = 'c';
    }
  } else {
    result = 'a';
  }
  result += 'b';
  return result;
}

// answer
function test() {
  let result = '';
  if (!a) {
    result = 'a';
    result += 'b';
    return result;
  }
  if (!b) {
    result = 'c';
  }
  result += 'b';
  return result;
}
