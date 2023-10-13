import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        <span>{this.state.counter}</span>
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;
