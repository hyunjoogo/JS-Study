/*const obj = [1, 2, 3];

// 1. [1,2,3]으로 Array오브젝트를 생성하여 obj에 할당.
// 2. obj의 구조를 보면 prototype은 없고 [[prototype]]만 있으므로
// 3. obj는 빌트인 Array 오브젝트가 아니라
//    - Array.prototype에 연결된 메소드로 생성한 인스턴스이다.
debugger;

const one = obj.slice(1, 2);
// 1. one과 obj의 구조는 차이가 없으며 값만 다르다.
// 2. 인스턴스에 있는 메소드를 호출하면
//    - 메소드 실행 결과값을 반환하지 않고
//    - 결과값이 설정된 인스턴스를 반환하기 때문

debugger;

// 정리하면
// 1. Array 인스턴스의 메소드를 호출하면
//    - 값을 반환하는 것이 아니라
// 2. 반환할 Array 인스턴스를 생성하고
//    - 메소드에서 구한 값을 반환할 Array 인스턴스에 설정하여
//    - Array 인스턴스를 반환한다.*/

/*class Sports extends Array {};
// 빌트인 Array 오브젝트를 상속받음
const obj = new Sports(10, 20, 30);
// 인스턴스를 생성
const one = obj.slice(1, 2);
// obj 인스턴스의 slice()를 호출하면
// slice() 처리 결과를 인스턴스에 설정하여 인스턴스를 반환한다.
// 인스턴스의 메소드를 호출했을 때
//    - 인스턴스를 반환하도록 하는 것이 Symbol.species 기능

// obj는 constructor가 없다.
// 그런데 one에 인스턴스가 할당된다.
//    - constructor가 없는데 인스턴스가 할당되는 논리적인 근거는
//    - Symbol.species가 해주는 것*/

class Sports extends Array {
  // 빌트인 Array 오브젝트를 상속받음
  static get [Symbol.species]() {
    return Array;
  }
  // 빌트인 Array 오브젝트의 @@species를 오버라이드한다.
};

const one = new Sports(10, 20, 30);
// 인스턴스를 생성하고 파라미터 값이 인스턴스에 설정
console.log(one instanceof Sports); // true
// Sports로 one을 만들었으므로 true 출력

const two = one.slice(1, 2);
// Array 오브젝트를 상속받았으므로 one인스턴스로 slice()를 호출할 수 있다.
// slice() 대상은 인스턴스에 설정된 [10, 20, 30]
// 인스턴스를 반환하며 반환되는 인스턴스에 slice() 결과를 설정

// Symbol.species()로 오버라이드했으므로
//    - static get [Symbol.species]() {}가 호출됨
//    - 호출에 사용한 one 인스턴스 형태를 반환하지 않고 Array 인스턴스를 반환
//    - 이처럼 Symbol.species()로 반환할 인스턴스를 변경할 수 있음

console.log(two instanceof Array); // true
// two 인스턴스에는 Array 인스턴스가 할당되어 있으며
// Array 오브젝트로 만들었으므로 true 출력
console.log(two instanceof Sports); // false
// Sports가 아니라 Array 오브젝트로 two 인스턴스를 만들었으므로 false 출력
