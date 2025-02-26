import { Component } from "react";
import PropTypes from "Prop-types";

class WelcomeClass extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

WelcomeClass.propTypes = {
  name: PropTypes.string,
};

export default WelcomeClass;
