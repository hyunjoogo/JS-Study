var member = {
  Jan: {
    item: {
      title: "JS북",
      amount: 100,
    },
    point: [10, 20, 30],
  },
  Feb: {
    item: {
      title: "JS북",
      amount: 200,
    },
    point: [40, 50, 60],
  }
};

var result = 0;


function reduceCallback(prev, curr) {
  return prev + curr;
}

function show(param) {
  for (var type in param) {
    if (typeof param[type] === "object") {
      ifArray(param[type]);
    } else {
      console.log(type + ":", param[type]);
    }
  }
}

function ifArray(param) {
  if (Array.isArray(param)) {
    result = param.reduce(reduceCallback) + result;
  } else {
    show(param);
  }
}

show(member);

console.log(result);

// var total = (1 + 2);
//
//
var value = (function () {
  return 100;
}());

// var value = function () {
//   return 100;
// }
console.log(value);
// 1. 소괄호 안에 함수 작성
// 2. 소괄호는 그룹핑 연산자
// 3. 그룹핑 연산자이므로 소괄호 안의 표현식을 평가
// 4. 표현식이 함수이므로 function 오브젝트 생성
// 5. function 끝에 소괄호가 있으므로 함수 실행
