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
    this.setState({
      number: number - 1,
    });
  };

  componentDidMount() {
    console.log('Did Mount');
  }

  componentDidUpdate() {
    console.log('Did update');
  }

  componentWillUnmount() {
    console.log('Will unmount');
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
