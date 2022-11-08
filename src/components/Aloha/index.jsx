import { Component } from 'react';

class Aloha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 21345,
      isGreeting: true,
    };
  }

  handleClick = () => {
    // this.state.isGreeting = !isGreeting;
    // console.log(this.state.isGreeting);
    // v1
    this.setState({
      isGreeting: !this.state.isGreeting,
    });
  };

  render() {
    const { name } = this.props;
    const { isGreeting } = this.state;

    console.log(this.state);

    return (
      <>
        <p>
          {isGreeting ? 'Hello' : 'Bye'}, {name}!
        </p>
        <button id="btn" onClick={this.handleClick}>
          Change mode
        </button>
      </>
    );
  }
}

export default Aloha;
