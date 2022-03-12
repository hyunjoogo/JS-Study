// function* infinity() {
//   let i = 0;
//   while (true) {
//     yield ++i;
//   }
//   // while (true) : 조건이 참일 때 while문 안의 문장을 반복실행
//   // 이 조건문은 무한반복으로 브라우저가 뻗어버린다.
//   // 그러나 실행문에 yield가 있으면
//   // yield 오른쪽의 표현식을 평가하고 결과를 반환하고
//   // yield 단위로 실행을 하므로 다음 next()를 만날 때까지 함수가 멈춘다.
// }

// const iter = infinity();
// console.log(iter.next().value);
// console.log(iter.next());
// console.log(iter.next().value);


// function* sports(one) {
//   yield one + 10;
//   yield;
//   const value = yield one + 50;
//   // value에 값이 할당되는 것이 아니라 실행 후 반환
//   // 네번째 console.log가 실행될 때 next()에서 파라미터로 넘겨준 값을 할당
// };
//
// const obj = sports(30);
// console.log(obj.next()); // {value : 40, done : false}
// console.log(obj.next()); // {value : undefined, done : false}
// console.log(obj.next()); // {value : 80, done : false}
// console.log(obj.next()); // {value : undefined, done : true}

// function* sports(one) {
//   yield one;
//   const check = 20;
//   console.log(check);
// };
//
// const obj = sports(10);
//
// console.log(obj.next()); // {value : 10, done : false}
// console.log(obj.next()); // {value : undefined, done : true}
// console.log(obj.next()); // {value : undefined, done : true}
//
// // 1. obj.next() 호출
// //    - yield one 실행, {value : 10, done : false} 반환
//
// // 2. obj.next() 호출
// //    - check = 20; 과 console.log(check);를 실행하지만
// //    - yield 처리가 아니므로 {value : undefined, done : true} 반환
//
// // 3. 이 상태에서 obj.next()를 호출하면
// //    - {value : undefined, done : true} 반환
// //    - 함수를 호출할 수 있지만 더이상 함수안에 처리할 코드가 없어서
// //    - 함수가 실행되지 않는다.


function* sports(one) {
  let two = yield one;
  let three;
  let param = yield one + three;
  yield param + one;
};

const obj = sports(10);

console.log(obj.next()); // {value : 10, done : false}
console.log(obj.next()); // {value : NaN, done : false}
console.log(obj.next(20)); // {value : 30, done : false}
console.log(obj.next()); // {value : undefined, done : true}

// 1. function* sports(one) { ... };
//    - 제너레이터 함수를 선언
//    - 3개의 yield를 작성
// 2. const obj = sports(10);
//    - 제너레이터 오브젝트 생성
//    - 파라미터 값, 10이 one에 설정
// 3. 첫 번째 obj.next()를 호출
//    - let two = yield one;이 실행
//    - one의 값인 10을 반환
//    - 하지만, two 변수에 10을 할당하지 않음 (다음 next()의 파라미터으로 설정)
// 4. 두 번째 obj.next()를 호출
//    - next()의 파라미터를 two 변수에 할당 (파라미터가 undefined 이므로 two는 undefined)
//    - let three; 실행
//    - let param = yield one + three; 실행
//    - one + three는 10 + undefined 이므로 NaN 반환
// 5. 세 번재 obj.next(20)를 호출
//    - next()의 파라미터를 param 변수에 할당 (파라미터가 20 이므로 param는 20)
//    - yield param + one; 실행
//    - param + one 는 20 + 10 이므로 30 반환
// 6. 네번째 obj.next()를 호출
//    - 실행할 코드도 없고 yield가 없으므로 더 이상 처리하지 않고
//    - 끝이라는 것을 나타내는 done:true를 반환


