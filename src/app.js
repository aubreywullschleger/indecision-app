import React from "react"
import ReactDOM from "react-dom"
import IndecisionApp from "./components/IndecisionApp"

const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  )
}

const template = (
  <div>
    <h1>page title</h1>
    
  </div>
)

ReactDOM.render((
  <Layout>
    <p>inline content</p>
  </Layout>
), document.getElementById("app"))