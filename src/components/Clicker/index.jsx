import React, { Component } from 'react';
/*
  Сделать компонент кликера
  он должен отображать счетчик лкиокв
  и кнопку изменения счетчика

  Создайте компонент ДисплейКликера - его роль отображать счет

  Создайте компонент КонтроллерКликера - туда должна поехать кнопка

  Кликер должен работать как обычно
*/

class Clicker extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    const { counter } = this.state;

    const newState = {
      counter: counter + 1,
    };

    this.setState(newState);
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <ClickerDisplay clicks={counter} />
        <ClickerController onClick={this.handleClick} />
      </div>
    );
  }
}

function ClickerDisplay(props) {
  const { clicks } = props;
  return (
    <div>
      <p>You have made {clicks} clicks</p>
    </div>
  );
}

function ClickerController(props) {
  const { onClick } = props;
  return <button onClick={onClick}>Click me</button>;
}

export default Clicker;
