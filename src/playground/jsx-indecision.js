console.log('app.js')

// Conditional Rendering in JSX:
// if statements
// ternary operators - for when you want to do one of two things
// logical and operator - for when you just want to do one thing else do nothing at all
// if a jsx expression resolves to undefined nothing shows up (same thing with undefined, booleans, and null)
// for the and operator if both operands are true the right operand is returned from the && operator
// if the first or second value is false (on the && operator), false is returned instead

// JSX - JavaScript XML
const app = {
  title: "indecision app",
  subtitle: "some info",
  options: []
}

const onRemoveAll = () => {
  app.options = []
  render()
}

const onFormSubmit = e => {
  e.preventDefault()

  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ""
    render()
  }
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options && app.options.length > 0) ? "here are your options" : "no options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should I do?</button>
      <button onClick={onRemoveAll}>remove all</button>
      {
        // numbers.map(num => <p key={num}>Number: {num}</p>)
      }
      <ol>
        {
          app.options.map(opt => <li key={opt}>{opt}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>add option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')
render()

// Notes about bind:
// When we reference obj.getName and the variable getName, they try to run the same code obj.getName(), however the context they both ran in is different, obj.getName is in the context of an object and we have access to the object as the this binding - when we break it out into a function we lose the context, the context does not get transfered. We have a regular function, which have an undefined `this` by default ex: const func = function () {console.log(this) //prints undefined}. To set the `this` context on a function which would otherwise have an undefined `this` we use the function.bind(thisObj) method (without passing in this gives us the same exact function w/o `this` context set). We see this happen with event handlers (ex: onClick, onSubmit, etc) to set this we can do onClick={this.handleEvent.bind(this)} or we can override the constructor of the class see app.js 
// constructor(props) {
//     super(props)
//     this.handleRemoveAll = this.handleRemoveAll.bind(this)
//   }

// const obj = {
//   name: "aubrey",
//   getName() {
//     return this.name
//   }
// }
// const getName = obj.getName.bind(obj)
// console.log(getName())