"use strict";

console.log('app.js'); // Conditional Rendering in JSX:
// if statements
// ternary operators - for when you want to do one of two things
// logical and operator - for when you just want to do one thing else do nothing at all
// if a jsx expression resolves to undefined nothing shows up (same thing with undefined, booleans, and null)
// for the and operator if both operands are true the right operand is returned from the && operator
// if the first or second value is false (on the && operator), false is returned instead
// JSX - JavaScript XML

var app = {
  title: "indecision app",
  subtitle: "some info",
  options: []
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var render = function render() {
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options && app.options.length > 0 ? "here are your options" : "no options"), React.createElement("button", {
    disabled: app.options.length === 0,
    onClick: onMakeDecision
  }, "what should I do?"), React.createElement("button", {
    onClick: onRemoveAll
  }, "remove all"), React.createElement("ol", null, app.options.map(function (opt) {
    return React.createElement("li", {
      key: opt
    }, opt);
  })), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "add option")));
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
render();
