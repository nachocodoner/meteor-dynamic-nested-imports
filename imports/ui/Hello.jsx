import React, { Component } from 'react';
import {DEFAULT_LINK_TARGET} from "./Info";

export default class Hello extends Component {
  state = {
    counter: 0,
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>Click Me</button>
        <p>You've pressed the button {this.state.counter} times. ${DEFAULT_LINK_TARGET}</p>
      </div>
    );
  }
}
