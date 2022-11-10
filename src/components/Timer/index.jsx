import React, { Component } from 'react';

class Timer extends Component {
  state = {
    number: 10,
  };

  constructor(props) {
    super(props);
  }

  decrementNumber = () => {
    const { number } = this.state;
    if (number === 0) {
      clearInterval(this.timerId);
    } else {
      this.setState({
        number: number - 1,
      });
    }
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
      </div>
    );
  }
}

export default Timer;
