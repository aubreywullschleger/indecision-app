// const square = function (x) {
//   return x*x
// }

// console.log(square(8))

// // arrow functions are always anonymous, have to assign to variable if want to reference later
// // const squareArrow = (x) => {
// //   return x*x
// // }

// // concise syntax when only returning one expression, implicit return, no return keyword
// const squareArrow = x => x*x

// console.log(squareArrow(6))

// const getFirstName = fullName => {
//   return fullName.split(" ")[0]
// }
const getFirstName = fullName => fullName.split(" ")[0]
console.log(getFirstName("Mike Smith"))