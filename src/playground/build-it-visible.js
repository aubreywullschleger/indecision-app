const data = {
  toggleMessage: "Some details!",
  visibility: true 
}

const onToggle = e => {
  data.visibility = !data.visibility
  render()
}

const render = () => {
  const app = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>{data.visibility ? "Hide details" : "Show details"}</button>
      {!data.visibility && <p>{data.toggleMessage}</p>}
    </div>
  )

  ReactDOM.render(app, document.getElementById("app"))
}

render()