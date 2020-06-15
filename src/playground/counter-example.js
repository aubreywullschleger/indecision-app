class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0,
    }
  }
  componentDidMount() {
    try {
      const count = parseInt(localStorage.getItem("count"), 10)

      if (!isNaN(count)) {
        this.setState(() => ({ count }))
      }
    } catch (e) {}
  }
  componentDidUpdate(prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count)
    }
  }

  // setState allows you to pass an object - this is the older approach, instead 
  // we are using the updater function (below) and is becoming prefered - and may
  // be the only way to call .setState in future, this is so we can use prevState 
  // and props (the arguments given to this.setState updater function by default)
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"))

// let count = 0

// const addOne = () => {
//   count++
//   renderCounterApp()
// }

// const minusOne = () => {
//   count--
//   renderCounterApp()
// }

// const reset = () => {
//   count = 0
//   renderCounterApp()
// }

// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )

//   ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()
