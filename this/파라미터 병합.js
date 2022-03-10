var book = {
  get: function () {
    return Array.prototype.slice.call(arguments);
  }
};

var obj = book.get.bind(this, 10, 20);
var result = obj(30, 40);
console.log(result);

// var obj = book.get.bind(this, 10, 20);
//    - 두번째, 세번째 파라미터에 값을 작성했으며
//    - book.get()의 파라미터 값으로 넘겨준다.
//    - function 오브젝트의 [[BoundArguments]]에 설정
// get() 함수에 파라미터 이름을
//    - 작성하지 않고 arguments 사용
// return Array.prototype.slice.call(arguments);
//    - slice()는 인덱스 범위의 엘리먼트를 배열로 반환
//    - 인덱스를 작성하지 않으면 arguments 전체 반환
// var result = obj(30, 40);
//    - book.get() 함수가 호출되며
//    - book.get.bind(this, 10, 20);에서 10과 20을 [10,20]형태로 반환
//    - 여기에 obj(30,40)의 30과 40을 병합(첨부)하여 반환

