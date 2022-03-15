const obj = new String(100);


// const sym = Symbol("함수이름");
// const obj = {
//   [sym](param) {
//     return param;
//   }
// };
// console.log(obj[sym](200)); // 200

const obj = {
  [Symbol("100")]: 100,
  two: 200
};

for (let key in obj) {
  console.log(key); // two
}

const list = [Symbol("100")];
for (let value of list) {
  console.log(value);
}

const sym = Symbol("JSON");
const result = JSON.stringify({[sym]: "ABC"});
console.log(result); // {}
