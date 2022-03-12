// function* sports(value) {
//   value += 20;
//   const param = yield ++value;
//   value = param + value;
//   yield ++value;
// };
//
// const obj = sports(10);
//
// console.log(obj.next());
// console.log(obj.next(20));
//
// // 1. 첫번째의 obj.next()를 호출하면
// //    - value += 20; (value :  10이므로 10 + 20하고 value를 30으로 할당)
// //    - yield ++value를 실행 (++로 1을 바로 증가시키고 31을 value에 할당)
// //    - {value : 31, done : false}을 반환
// //    - 왼쪽의 param에 값을 할당하지 않음
//
// // 2. 두번째의 obj.next(20) 호출하면
// //    - 첫번째 yield의 다음부터 다음의 yiedl까지 실행
// //    - yield의 다음이란 파라미터 20을 param에 설정하는 것을 뜻함
// //    - value = param + value; 실행 ( 20 + 31 = 51 을 value에 할당)
// //    - yield ++value; 실행 ( value에 1을 더해 value에 할당)
// //    - {value : 52, done : true}을 반환

// function* sports(value) {
//   ++value;
//   console.log(value);
// };
//
// const obj = sports(10);
//
// console.log(obj.next());
//
// // 1. 첫번째의 obj.next()를 호출하면
// //    - ++value; 실행 (value :  10이므로 +1을 하고 value를 11으로 할당)
// //    - console.log(value); 실행 ( log값 11)
// //    - yield가 없으므로 값이 반환되지 않음
// //    - {value : undefined, done : true}을 반환

/*
function* sports(score) {
  return ++score;
};

const obj = sports(10);

console.log(obj.next());
console.log(obj.next());

// 1. 첫번째의 obj.next()를 호출하면
//    - return ++score; 실행 (score :  10이므로 +1을 하고 score를 11으로 할당)
//    - {value : 11, done : true} 반환
//    - key가 score로 들어가는 것이 아니라 value의 값에 score가 할당되는 것
// 2. 두번째의 obj.next()를 호출하면
//    - yield가 없으므로 값이 반환되지 않음
//    - {value : undefined, done : true}을 반환
*/
