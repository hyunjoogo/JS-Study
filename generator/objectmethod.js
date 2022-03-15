// function* sports(count) {
//   while (true) {
//     yield ++count;
//   }
// }
//
// const obj = sports(10);
//
// console.log(obj.next());  // {value : 11, done : false}
// console.log(obj.return(70)); // {value : 70, done : true}
// console.log(obj.next(50)); // {value :undefined , done : true}
//
// // 1. console.log(obj.return(70));
// //    - 이터레이터를 종료시키며 파라미터 값 70을 반환
// //    - 즉시 함수를 종료시키므로 남아있는 코드를 실행하지 않는다.


/*function* sports() {
  try {
    yield 10;
  } catch (message) {
    yield message;
  }
  yield 20;
}

const obj = sports();

console.log(obj.next());
console.log(obj.throw("에러 발생"));
console.log(obj.next());
console.log(obj.next());

// 1. obj.throw("에러 발생")를 실행하면
//    - sports()의 catch(message)가 실행되고
//    - "에러 발생"이 message에 설정됨

// 2. catch()의 yield message; 를 수행하게 되며
//    - {value : "에러 발생", done : false}를 반환
//    - 제너레이터가 종료되지 않음

// 3. 다음의 obj.next() 호출
//    - throw() 호출로 인해 에러가 발생하지만
//    - {done : false}이므로 next()를 호출할 수 있음

// 4. yield 20;을 실행하게 되며
//    - {value : 20, done : false}를 반환*/

// function* sports() {
//   throw "에러 발생";
//   yield 10;
// }
//
// const obj = sports();
// try {
//   const result = obj.next();
// } catch (message) {
//   console.log(message);
// }
// console.log(obj.next());

// 1. const result = obj.next(); 실행
//    - 제너레이터 함수 안에 throw "에러 발생"; 으로 이동
//    - 함수가 종료되고 console.log(message); 메세지 출력

// 2. console.log(obj.next()); 실행
//    - 제너레이터 함수가 종료되었으므로
//    - {value : undefined, done : true} 출력


// function* sports() {
//   yield* [10, 20];
// }
//
// const obj = sports();
// console.log(obj.next());
// console.log(obj.next());
//
// // 1. 첫번째 obj.next()를 호출하면 yield* [10, 20];
// //    - {value : 10, done : false} 반환
// // 2. 두번째 obj.next()를 호출하면 yield* [10, 20];
// //    - {value : 20, done : false} 반환
//
// // yield*의 표현식이 배열이면 next()를 호출할 때마다
// // 배열의 엘리먼트를 순서대로 반환

// function* point(count) {
//   yield count + 5;
//   yield count + 10;
// }

// function* sports(value) {
//   yield* point(value);
//   yield value + 20;
// }
//
// const obj = sports(10);
//
// console.log(obj.next()); // {value : 15, done : false}
// console.log(obj.next()); // {value : 20, done : false}
// console.log(obj.next()); // {value : 30, done : false}

// 1. 첫번째 obj.next()를 호출하면
//    - yield* point(value);를 실행

// 2. yield*의 표현식에 함수를 작성했으므로 point(value) 호출
//    - point()가 제너레이터 함수이므로
//    - 우선, 제너레이터 오브젝트를 생성

// 3. next()로 호출해야 yield가 수행되지만
//    - 자동으로 point() 첫 번째의 yield count + 5;를 수행
//    - {value : 15, done : false} 반환

// 4. 두번째 obj.next()를 호출하면
//    - 자동으로 point() 두 번째의 yield count + 5;를 수행
//    - {value : 20, done : false} 반환

// 5. 세번째 obj.next()를 호출하면
//    - point()의 yield를 모두 처리했으므로
//    - sports()이 yield value + 20; 실행
//    - {value : 30, done : false} 반환


function* sports(point) {
  yield point;
  yield* sports(point + 10);
}

const obj = sports(10);

console.log(obj.next()); // {value : 10, done : false}
console.log(obj.next()); // {value : 20, done : false}
console.log(obj.next()); // {value : 30, done : false}

// 1. 첫번째 obj.next()를 호출하면
//    -  yield point;를 실행하여 {value : 10, done : false} 반환

// 2. 두번째 obj.next()를 호출하면
//    - yield* sports(point + 10);에서 자신을 호출
//    - 첫 번째의 yield point;를 수행
//    - {value : 20, done : false} 반환

// 3. 세번째 obj.next()를 호출하면
//    - yield* sports(point + 10);에서 자신을 호출
//    - 첫 번째의 yield point;를 수행
//    - {value : 30, done : false} 반환

// 4. yield point가 없으면
//    - 무한루프를 돌게 된다.



