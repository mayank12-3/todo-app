const square = function (x) {
  return x * x;
}
// const squareArrow = (x) => {
//   return x * x;
// }

const squareArrow = (x) => x * x;
const getFirstName = (fullName) =>  fullName.split(' ')[0];

console.log(square(3));
console.log(squareArrow(8));
console.log(getFirstName('Mayank Jain'));

