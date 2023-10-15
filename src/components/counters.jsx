import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    //and since the key and the value are the same we're going to simply our code from this:
    //this.setState({ counters: counters });
    //to this:
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <React.Fragment key={counter.id}>
            <Counter
              onDelete={this.handleDelete}
              //instead of passing each prop like this:
              //   value={counter.value}
              //   id={counter.id}
              //we can use this syntax for optimisation and clarity:
              counter={counter}
            ></Counter>
            <br />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Counters;
