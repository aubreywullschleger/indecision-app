class Person {
  constructor (name = "anonymous", age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hello! I am ${this.name}.`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person("aubrey w", 30)
console.log(me.getDescription())

const other = new Person()
console.log(other.getDescription())