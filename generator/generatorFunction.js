// const fn = new Function("one", "return one");
// console.log(fn(100));

// 생성자 함수
// constructor가 없으면 new 연산자로 인스턴스를 생성하지 못하므로
//
// const create = Object.getPrototypeOf(
//   function* () {
//   }).constructor;

// new 연산자로 생성자 함수를 호출하여 위의 방법으로
// sports라는 제너레이터 함수를 생성
// 이 때서야 sports는 function* 함수가 됨

// const sports = new create("one", "yield one");
// const obj = sports(100);
//
// console.log(obj.next());


