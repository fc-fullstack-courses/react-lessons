import React, { Component } from 'react';

class Timer extends Component {
  state = {
    number: 10,
    isDoubled: true,
  };

  constructor(props) {
    super(props);
  }

  decrementNumber = () => {
    const { number, isDoubled } = this.state;
    // if (number === 0) {
    //   clearInterval(this.timerId);
    // } else {
    this.setState((state) => ({
      number: state.number - 1,
    }));
    if (isDoubled) {
      console.log('Doubled');
      // когда надо самому свежему состоянию
      this.setState((updatedState) => {
        const newState = {
          number: updatedState.number - 1,
        };
        return newState;
      });
    }
    // }
  };

  componentDidMount() {
    console.log('Did Mount');

    this.timerId = setInterval(this.decrementNumber, 1000);
  }

  componentDidUpdate() {
    console.log('Did update');
    const { number } = this.state;
  }

  componentWillUnmount() {
    console.log('Will unmount');

    clearInterval(this.timerId);
  }

  render() {
    const { number } = this.state;

    return (
      <div>
        <p>{number}</p>
        <button onClick={this.decrementNumber}>Decrement</button>
      </div>
    );
  }
}

export default Timer;
