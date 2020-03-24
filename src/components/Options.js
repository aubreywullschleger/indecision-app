import React from "react"
import Option from "./Option"

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link" 
        onClick={props.handleDeleteOptions}
      >
        Remove All Options
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
    {
      props.options.map((opt, idx) => (
        <Option
          count={idx + 1} 
          key={opt} 
          optionText={opt}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
    
  </div>
)

export default Options