// let status = true;
//
// function* sports() {
//   let count = 0;
//   while (status) {
//     yield ++count;
//   }
// }
//
// const obj = sports();
//
// console.log(obj.next()); // {value : 1, done : false}
// console.log(obj.next()); // {value : 2, done : false}
// status = false;
// console.log(obj.next()); // {value : undefined, done : true}
//
// // 1. let status = true;
// //    - while() 문을 제어하기 위한 상태 값
//
// // 2. 첫번째 next() 호출
// //    - let count = 0; 을 실행하여 count 변수에 0을 설정
// //    - 누적 값을 구하기 위한 것
//
// // 3. while (status) { yield ++count; }
// //    - status가 true이므로 yield를 수행
// //    - {value : 1, done : false} 반환
//
// // 4. 두번째 next() 호출
// //    - status가 true이므로 yield를 수행
// //    - {value : 2, done : false} 반환
//
// // 5. status = false;
// //    - yield 수행을 끝내기 위한 것
//
// // 6. 세번째 next() 호출
// //    - status가 false이므로 yield ++count; 를 수행하지 않음
// //    - {value : undefined, done : true} 반환
// //    - done : true 이므로 이터레이터를 더 이상 사용할 수 없음


// function* sports() {
//   return yield yield yield;
// }
//
// const obj = sports();
//
// console.log(obj.next()); // {value : undefined, done : false}
// console.log(obj.next(10)); // {value : 10, done : false}
// console.log(obj.next(20)); // {value : 20, done : false}
// console.log(obj.next(30)); // {value : 30, done : true}

// 1. 첫번째 next() 호출
//    - 첫번째 yield를 수행
//    - yield의 반환값이 없으므로 {value : undefined, done : false} 반환

// 2. 두번째 next() 호출
//    - 두번째 yield를 수행
//    - 함수에 파라미터 값을 받을 변수가 없으면
//    - 파라미터로 넘겨준 값을 반환 {value : 10, done : false} 반환

// 3. 세번째 next() 호출
//    - 세번째 yield를 수행
//    - 함수에 파라미터 값을 받을 변수가 없으면
//    - 파라미터로 넘겨준 값을 반환 {value : 20, done : false} 반환

// 2. 네번째 next() 호출
//    - 더 이상의 yield가 없으므로
//    - return 문으로 파라미터로 넘겨 준 값을 반환 {value : 30, done : true} 반환

// function* sports() {
//   return [yield yield];
// }
//
// const obj = sports();
//
// console.log(obj.next()); // {value : undefined, done : false}
// console.log(obj.next(10)); // {value : 10, done : false}
// console.log(obj.next(20)); // {value : [20], done : false}
// const last = obj.next(20);
// console.log(last); // {value : undefined, done : true}

// 1. next(), next(10) 호출
//    - yield를 연속해서 작성한 것과 동일

// 2. next(20)
//    - 파라미터 값 : 20
//    - return [yield yield]에서
//    - {value : [20], done : true} 형태로 반환
//    - [20]처럼 []안에 파라미터 값 20을 넣어서 반환

function* sports(count) {
  while (true) {
    yield ++count;
  }
}

for (let point of sports(10)) {
  console.log(point);
  if (point > 12) {
    break;
  };
}

//  while (true) { yield ++count; } 실행될 때마다
// { value: 11, done:false } 를 반환하지 않고 value만 point 변수에 설정
// {done : true}로 종료처리를 할 수 없으므로 break;를 사용하여 종료
