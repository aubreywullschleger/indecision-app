"use strict";

var data = {
  toggleMessage: "Some details!",
  visibility: true
};

var onToggle = function onToggle(e) {
  data.visibility = !data.visibility;
  render();
};

var render = function render() {
  var app = React.createElement("div", null, React.createElement("h1", null, "Visibility Toggle"), React.createElement("button", {
    onClick: onToggle
  }, data.visibility ? "Hide details" : "Show details"), !data.visibility && React.createElement("p", null, data.toggleMessage));
  ReactDOM.render(app, document.getElementById("app"));
};

render();
