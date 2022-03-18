const add = (a, b) => {
  return console.log(a + b);
};

function calculator(func, a, b) {
  return func(a, b);
}

add(3, 5); // 8
// 함수를 넘겨주는 코드를 함수를 호출하는 코드로 바꾼다면?
calculator(add, 3, 5);
calculator(add(), 3, 5);

// 이해하기 쉽게 함수를 호출하는 코드를 리턴값으로 대체 해보자.
calculator(console.log(a, b), 3, 5);
// a, b는 undefined 이므로
calculator(console.log(undefined, undefined), 3, 5);
// 이러면 에러가 난다.


