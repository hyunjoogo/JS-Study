var book = {
  member: {name: 100},
  point: {value: 200}
};

function show(param) {
  for (var type in param) {
    typeof param[type] === "object"
      ? show(param[type])
      : console.log(type + ":", param[type]);
  }
}

show(book);

// 1. show(book);
//    - 마지막 줄에서 show(book)를 호출하면서
//    - book 오브젝트를 파라미터 값으로 넘겨줌
// 2. for (var type in param) {...}
//    - for-in으로 파라미터로 받은 오브젝트 전개
// 3. typeof param[type] === "object"
//       ? show(param[type])
//       : console.log(type + ":", param[type]);
// 4. param[type] 타입이 "object이면
//    - show()를 호출, 자신을 호출하면서 param[type]을 넘겨줌
//    - book["member"]이므로 {name : 100}이 넘어감
// 5. param[type] 타입이 "object"가 아니면
//    - member : {name : 100}에서 {name : 100}을 읽은 것이므로 값을 출력

