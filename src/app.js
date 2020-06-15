import React from "react"
import ReactDOM from "react-dom"
import IndecisionApp from "./components/IndecisionApp"
import "normalize.css/normalize.css"
import "./styles/styles.scss"

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))

/* Stretch goals for Indecision App
1. deploy to web - set up gh, heroku, deploying