function book() {
  var point = 100;
  var getPoint = function (param) {
    point = point + param;
    return point
  };
  return getPoint;
}

var obj = book();
console.log(obj(200));

실행 콘텍스트 = {
  렉시컬 환경 컴포넌트 = {
    환경 레코드 : {
      선언적 환경 레코드 : {
        param : 200,
      },
      오브젝트 환경 레코드 : {
        point : 100,
      }
    },
    외부 렉시컬 환경 참조 : {[[scope]]}
  },
  변수 환경 컴포넌트 = {렉시컬 환경 컴포넌트와 같음},
  this 바인딩 컴포넌트 : {},
}
