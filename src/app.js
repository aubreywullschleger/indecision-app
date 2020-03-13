// class based component - manages state
// stateless functional component - stateless, presentational, can call methods, faster (b/c not extending React.Component)

// IndecisionApp class component
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    // IndecisionApp event handler bindings
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    // IndecisionApp state
    this.state = {
      options: props.options
    }
  }

// Lifecycle methods:
  // when component first gets mounted to dom, we only have access to lifcycle methods in class based components
  componentDidMount() {
    try {
      const json = localStorage.getItem("options")
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // do nothing at all
    } 
  }
  // when component updates via state or prop changes, we have access to this.state and this.props and prevState and prevProps via arguments
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem("options", json)
    }
    
  }
  // when a component goes away, fires just before component goes away
  componentWillUnmount() {
    console.log("component will unmount")
  }

  // handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  // handlePick
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  // handleAddOption
  handleAddOption(option) {
    if (!option) {
      return "enter valid value to add item"
    } else if (this.state.options.indexOf(option) > -1) {
      return "option already exists"
    }

    this.setState(prevState => ({ 
      options: prevState.options.concat(option)
    }))
  }

  // handleDeleteOption
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
  }

  // render IndecisionApp
  render() {
    const subtitle = "Put your life in the hands of a computer."

    return (
      <div>
        <Header 
          subtitle={subtitle} 
        />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick} 
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption} 
        />
        <AddOption
          handleAddOption={this.handleAddOption} 
        />
      </div>
    )
  }
}

// IndecisionApp default props
IndecisionApp.defaultProps = {
  options: []
}

// Header stateless functional component
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

// Header default props
Header.defaultProps = {
  title: "Indecision"
}

// Action stateless functional component
const Action = props => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}

// Options stateless functional component 
const Options = props => {
  return (
    <div>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map(opt => (
          <Option 
            key={opt} 
            optionText={opt}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
      <button onClick={props.handleDeleteOptions}>Remove All Options</button>
    </div>
  )
}

// Option stateless functional component
const Option = props => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={e => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        Remove
      </button>
    </div>
  )
}

// AddOption class component
class AddOption extends React.Component {
  constructor(props) {
    super(props)
    // AddOption event handler binding
    this.handleAddOption = this.handleAddOption.bind(this)
    // AddOption state
    this.state = {
      error: undefined
    }
  }

  // handleAddOption
  handleAddOption(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() => ({ error }))
    
    if (!error) {
      e.target.elements.option.value = ""
    }
  }

  // render AddOption
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

// const User = props => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))