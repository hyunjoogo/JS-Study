// const one = [10, 20], two = ["A", "B"];
//
// const show = () => {
//   console.log(one.concat(two));
// };
//
// show(); // [10, 20, "A", "B"]
// two[Symbol.isConcatSpreadable] = true;
// show(); // [10, 20, "A", "B"]
// two[Symbol.isConcatSpreadable] = false;
// show(); // [10, 20, ["A", "B"]]


const one = [10, 20];
const like = {0: "A", 1: "B", length: 2};
const show = () => {
  console.log(one.concat(like));
};


show(); // [10, 20, {0: "A", 1: "B", length: 2}]
like[Symbol.isConcatSpreadable] = true;
show(); // [10, 20, "A", "B"]
like[Symbol.isConcatSpreadable] = false;
show(); // [10, 20, {0: "A", 1: "B", length: 2}]
