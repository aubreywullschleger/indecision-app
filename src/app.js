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