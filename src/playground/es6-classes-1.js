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

class Student extends Person {
  constructor (name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription()

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }

    return description
  }
}

class Traveler extends Person {
  constructor (name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}`
    }

    return greeting
  }
}

// const me = new Person("aubrey w", 30)
// console.log(me.getDescription())

// const me = new Student("aubrey w", 30, "advertising")
// console.log(me.getDescription())

const me = new Traveler("aubrey w", 30, "denver")
console.log(me.getGreeting())

// const other = new Person()
// console.log(other.getDescription())

// const other = new Student()
// console.log(other.getDescription())

const other = new Traveler()
console.log(other.getGreeting())