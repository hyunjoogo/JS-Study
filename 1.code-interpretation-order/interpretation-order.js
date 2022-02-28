function book() {
// 2. 함수 선언문 해석
  // function 선언문을 찾는다. (위에서 아래로)
  // function getBook() {}; (function 오브젝트 생성)
  // 더 이상의 함수 선언문이 없으므로 함수 첫 줄로 이동
// 3. 변수 초기화
  // 변수들만 찾는다. (위에서 아래로)
  // debugger는 실행이므로 패스
  // var title = undefined;
  // 이미 초기화한 function getBook() {}; 는 패스
  // var readBook = undefined;
  // 더 이상 변수가 없으므로 함수 첫 줄로 이동
// 4. 코드 실행
  // debugger 실행
  // var title = "JS책"; (title 변수에 "JS책" 할당)
  // function getBook() {};는 선언이므로 패스
  // var readBook = function (){};
    // function 오브젝트를 생성하여 readBook 변수에 할당
    // readBook이 function 오브젝트가 되므로 호출 가능
    // 만약 이전에 readBook을 호출하면 error가 난다. (readBook())
  // getBook(); 함수를 호출

  debugger;

  var title = "JS책";
  function getBook() {
    return title;
  };
  var readBook = function (){};
  getBook();
}

book(); // 1. book() 함수를 호출하면서 debugger에서 실행이 멈춤
