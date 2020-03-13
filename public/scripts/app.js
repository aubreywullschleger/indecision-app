"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// class based component - manages state
// stateless functional component - stateless, presentational, can call methods, faster (b/c not extending React.Component)
// IndecisionApp class component
var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndecisionApp).call(this, props)); // IndecisionApp event handler bindings

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_assertThisInitialized(_this)); // IndecisionApp state

    _this.state = {
      options: props.options
    };
    return _this;
  } // Lifecycle methods:
  // when component first gets mounted to dom, we only have access to lifcycle methods in class based components


  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("fetching data");
    } // when component updates via state or prop changes, we have access to this.state and this.props and prevState and prevProps via arguments

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log("saving data");
    } // when a component goes away, fires just before component goes away

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("component will unmount");
    } // handleDeleteOptions

  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    } // handlePick

  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    } // handleAddOption

  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "option already exists";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    } // handleDeleteOption

  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    } // render IndecisionApp

  }, {
    key: "render",
    value: function render() {
      var subtitle = "Put your life in the hands of a computer.";
      return React.createElement("div", null, React.createElement(Header, {
        subtitle: subtitle
      }), React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        handlePick: this.handlePick
      }), React.createElement(Options, {
        options: this.state.options,
        handleDeleteOptions: this.handleDeleteOptions,
        handleDeleteOption: this.handleDeleteOption
      }), React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component); // IndecisionApp default props


IndecisionApp.defaultProps = {
  options: []
}; // Header stateless functional component

var Header = function Header(props) {
  return React.createElement("div", null, React.createElement("h1", null, props.title), props.subtitle && React.createElement("h2", null, props.subtitle));
}; // Header default props


Header.defaultProps = {
  title: "Indecision"
}; // Action stateless functional component

var Action = function Action(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.handlePick,
    disabled: !props.hasOptions
  }, "What should I do?"));
}; // Options stateless functional component 


var Options = function Options(props) {
  return React.createElement("div", null, props.options.map(function (opt) {
    return React.createElement(Option, {
      key: opt,
      optionText: opt,
      handleDeleteOption: props.handleDeleteOption
    });
  }), React.createElement("button", {
    onClick: props.handleDeleteOptions
  }, "Remove All Options"));
}; // Option stateless functional component


var Option = function Option(props) {
  return React.createElement("div", null, props.optionText, React.createElement("button", {
    onClick: function onClick(e) {
      props.handleDeleteOption(props.optionText);
    }
  }, "Remove"));
}; // AddOption class component


var AddOption = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props)); // AddOption event handler binding

    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2)); // AddOption state

    _this2.state = {
      error: undefined
    };
    return _this2;
  } // handleAddOption


  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
      e.target.elements.option.value = "";
    } // render AddOption

  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.state.error && React.createElement("p", null, this.state.error), React.createElement("form", {
        onSubmit: this.handleAddOption
      }, React.createElement("input", {
        type: "text",
        name: "option"
      }), React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component); // const User = props => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
