// arguments object - no longer bound with arrow functions, if need access to arguments list use function keyword

// const add = function (a, b) {
//   console.log(arguments)
//   return a + b
// }
// vs
const add = (a, b) => {
  // console.log(arguments)
  return a + b
}

console.log(add(55, 1, 1000))


// this keyword - no longer bound with arrow functions, instead bound to context in which the function was created in
// don't use arrow functions in methods
const user = {
  name: "aubrey",
  cities: ["denver", "portland", "omaha"],
  // es6 method syntax, same characteristics as es5 functions
  printPlacesLived() {
    return this.cities.map((city) => `${this.name} has lived in ${city}`) 
    // this.cities.forEach(city => {
    //   console.log(this.name + " has lived in " + city)
    // })
  }
}

console.log(user.printPlacesLived())

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(num => num * this.multiplyBy)
  }
}

console.log(multiplier.multiply())