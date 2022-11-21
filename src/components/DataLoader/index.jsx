import { Component } from 'react';

class DataLoader extends Component {
  state = {
    data: [],
    isLoading: false,
    error: null,
  };

  load = () => {
    const { loadData } = this.props;
    this.setState({ isLoading: true });

    loadData()
      .then((data) => {
        this.setState({
          data,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.load();
  }

  render() {
    const { render } = this.props;
    const layout = render(this.state);

    return layout;
  }
}

export default DataLoader;
