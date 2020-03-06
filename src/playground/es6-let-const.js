// var can be reassigned and redefined
var nameVar = "aubrey"
var nameVar = "mike"
console.log("nameVar", nameVar)

// let can be reassigned but not redefined
let nameLet = "jen"
nameLet = "julie"
console.log("nameLet", nameLet)

// const cannot be redefined or reassigned
const nameConst = "frank"
console.log("nameConst", nameConst)

// var, let, and const variables are function scoped
// let and const are also block level scoped --> bound to code blocks (if statements, for loops)
function getPetName() {
  // var petName = "hal"
  // let petName = "hal"
  const petName = "hal"
  return petName
}

getPetName()
// console.log(petName)

// block level scoping
var fullName = "andrew mead"

if (fullName) {
  // var firstName = fullName.split(" ")[0]
  // let firstName = fullName.split(" ")[0]
  const firstName = fullName.split(" ")[0]
  console.log(firstName)
}

console.log(firstName)