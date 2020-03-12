class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
    
  }

  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
        {this.state.visibility && <p>Some details!</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))

// const data = {
//   toggleMessage: "Some details!",
//   visibility: true 
// }

// const onToggle = e => {
//   data.visibility = !data.visibility
//   render()
// }

// const render = () => {
//   const app = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggle}>{data.visibility ? "Hide details" : "Show details"}</button>
//       {!data.visibility && <p>{data.toggleMessage}</p>}
//     </div>
//   )

//   ReactDOM.render(app, document.getElementById("app"))
// }

// render()